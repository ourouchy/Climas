"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PhotoCategory {
  name: string;
  thumbnail: string;
  photos: Photo[];
}

interface PhotoAlbumProps {
  isOpen: boolean;
  onClose: () => void;
  categories: PhotoCategory[];
  title: string;
}

export default function PhotoAlbum({ 
  isOpen, 
  onClose, 
  categories, 
  title 
}: PhotoAlbumProps) {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen && categories.length > 0) {
      setSelectedCategory(categories[0]);
      setCurrentPhotoIndex(0);
    }
  }, [isOpen, categories]);

  useEffect(() => {
    if (selectedCategory) {
      setCurrentPhotoIndex(0);
    }
  }, [selectedCategory]);

  if (!isOpen) return null;

  const handleCategoryClick = (category: PhotoCategory) => {
    setSelectedCategory(category);
  };

  const handlePrevPhoto = () => {
    if (selectedCategory) {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 0 ? selectedCategory.photos.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextPhoto = () => {
    if (selectedCategory) {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === selectedCategory.photos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2">
      <div className="relative bg-white border border-gray-200 shadow-xl w-full max-w-7xl h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#1e496f]">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-gray-600" />
          </Button>
        </div>

        {/* Category Thumbnails */}
        <div className="p-4 border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex space-x-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`flex flex-col items-center cursor-pointer p-2 border transition-colors ${
                  selectedCategory?.name === category.name
                    ? "bg-[#eff4f5] border-[#49bce5]"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <Image
                  src={category.thumbnail}
                  alt={category.name}
                  width={80}
                  height={60}
                  className="object-cover h-16 w-24"
                  loading="lazy"
                  onLoad={() => handleImageLoad(category.thumbnail)}
                />
                <span className="mt-2 text-sm text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Photo Display */}
        <div className="flex-1 relative p-4 flex items-center justify-center bg-[#eff4f5]">
          {selectedCategory && selectedCategory.photos.length > 0 ? (
            <>
              <Image
                src={selectedCategory.photos[currentPhotoIndex].src}
                alt={selectedCategory.photos[currentPhotoIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                loading="lazy"
                onLoad={() => handleImageLoad(selectedCategory.photos[currentPhotoIndex].src)}
              />
              {selectedCategory.photos.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white"
                    onClick={handlePrevPhoto}
                  >
                    <ChevronLeft className="h-6 w-6 text-[#1e496f]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white"
                    onClick={handleNextPhoto}
                  >
                    <ChevronRight className="h-6 w-6 text-[#1e496f]" />
                  </Button>
                </>
              )}
              
              {/* Photo Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
                {currentPhotoIndex + 1} / {selectedCategory.photos.length}
              </div>
            </>
          ) : (
            <p className="text-gray-500">Sélectionnez une catégorie ou ajoutez des photos.</p>
          )}
        </div>

        {/* Thumbnail Strip */}
        {selectedCategory && selectedCategory.photos.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {selectedCategory.photos.map((photo, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-16 flex-shrink-0 cursor-pointer border-2 transition-colors ${
                    index === currentPhotoIndex
                      ? "border-[#49bce5]"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setCurrentPhotoIndex(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    onLoad={() => handleImageLoad(photo.src)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}