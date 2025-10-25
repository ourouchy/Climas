"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PhotoAlbum from "@/components/PhotoAlbum";
import { samplePhotoData, domesticPhotoData, commercialPhotoData } from "@/lib/photoData";

export default function PhotoGalleryDemo() {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [selectedDataSet, setSelectedDataSet] = useState("general");

  const getPhotoData = () => {
    switch (selectedDataSet) {
      case "domestic":
        return domesticPhotoData;
      case "commercial":
        return commercialPhotoData;
      default:
        return samplePhotoData;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#1e496f] mb-8 text-center">
            Photo Album Component Demo
          </h1>
          
          <div className="space-y-6">
            {/* Data Set Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Select Photo Data Set:</h2>
              <div className="flex gap-4">
                <Button
                  variant={selectedDataSet === "general" ? "default" : "outline"}
                  onClick={() => setSelectedDataSet("general")}
                >
                  General Photos
                </Button>
                <Button
                  variant={selectedDataSet === "domestic" ? "default" : "outline"}
                  onClick={() => setSelectedDataSet("domestic")}
                >
                  Domestic Photos
                </Button>
                <Button
                  variant={selectedDataSet === "commercial" ? "default" : "outline"}
                  onClick={() => setSelectedDataSet("commercial")}
                >
                  Commercial Photos
                </Button>
              </div>
            </div>

            {/* Open Album Button */}
            <div className="text-center">
              <Button
                onClick={() => setIsAlbumOpen(true)}
                className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-8 py-3 text-lg"
              >
                Open Photo Album
              </Button>
            </div>

            {/* Component Usage Instructions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                How to Use the PhotoAlbum Component:
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• <strong>Reusable:</strong> Import and use on any page</p>
                <p>• <strong>Configurable:</strong> Pass different photo data sets</p>
                <p>• <strong>Interactive:</strong> Click categories to switch photos</p>
                <p>• <strong>Responsive:</strong> Works on mobile and desktop</p>
                <p>• <strong>Modal:</strong> Overlay that can be opened/closed</p>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Usage Example:</h3>
              <pre className="text-sm overflow-x-auto">
{`import PhotoAlbum from "@/components/PhotoAlbum";
import { samplePhotoData } from "@/lib/photoData";

const [isOpen, setIsOpen] = useState(false);

<PhotoAlbum
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  categories={samplePhotoData}
  title="Our Work"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Album Modal */}
      <PhotoAlbum
        isOpen={isAlbumOpen}
        onClose={() => setIsAlbumOpen(false)}
        categories={getPhotoData()}
        title="Clima'S Photo Gallery"
      />
    </div>
  );
}
