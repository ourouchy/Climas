"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PhotoAlbum from "@/components/PhotoAlbum";
import { commercialPhotoData } from "@/lib/commercialPhotoData";
import { useState } from "react";

export default function Commercial() {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#eff4f5] to-white py-8 sm:py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#49bce5] text-base sm:text-lg mb-4">Solutions Professionnelles</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1e496f] mb-6 lg:mb-8 leading-tight">
                Climatisation pour professionnels
              </h1>
              <p className="text-gray-700 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Solutions climatisation et ventilation pour entreprises, écoles, collectivités et bâtiments publics. 
                Expertise technique et conformité réglementaire garanties.
              </p>
              <Link href="/contact">
                <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg w-full sm:w-auto">
                  DEMANDER UNE ÉTUDE
                </Button>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="https://ext.same-assets.com/3359485804/1811531807.jpeg"
                alt="Climatisation commerciale espace de bureau"
                width={600}
                height={400}
                className="rounded-lg w-full h-48 sm:h-64 lg:h-80 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e496f] mb-4 lg:mb-6">
              Nos solutions professionnelles
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Des solutions complètes pour tous types de bâtiments professionnels et publics
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Climatisation */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#49bce5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e496f] mb-4">Climatisation</h3>
              <p className="text-gray-700">
                Systèmes de climatisation haute performance pour bureaux, écoles et bâtiments publics.
              </p>
            </div>

            {/* Ventilation */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#49bce5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e496f] mb-4">Ventilation</h3>
              <p className="text-gray-700">
                Systèmes de ventilation et traitement d&apos;air pour garantir la qualité de l&apos;air intérieur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="py-16 bg-[#eff4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
                Gestion de projet professionnelle
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Étude technique approfondie</h3>
                    <p className="text-gray-700">Analyse des besoins, contraintes techniques et réglementaires spécifiques à votre secteur d&apos;activité.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Planification et coordination</h3>
                    <p className="text-gray-700">Gestion des délais, coordination avec les autres corps de métier et respect des contraintes d&apos;exploitation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Installation sans interruption</h3>
                    <p className="text-gray-700">Réalisation des travaux en respectant vos contraintes d&apos;exploitation et horaires d&apos;ouverture.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Formation et documentation</h3>
                    <p className="text-gray-700">Formation des équipes techniques et remise de la documentation complète du système.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3359485804/1811531807.jpeg"
                alt="Gestion de projet climatisation commerciale"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
              Secteurs d&apos;activité
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos solutions s&apos;adaptent aux besoins spécifiques de chaque secteur professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#eff4f5] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#49bce5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e496f] mb-3">Éducation</h3>
              <p className="text-gray-700 text-sm">Écoles, collèges, lycées et universités avec contraintes horaires spécifiques.</p>
            </div>

            <div className="bg-[#eff4f5] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#49bce5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e496f] mb-3">Collectivités</h3>
              <p className="text-gray-700 text-sm">Mairies, centres administratifs et bâtiments publics avec exigences de conformité.</p>
            </div>

            <div className="bg-[#eff4f5] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#49bce5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V4m8 0H8m8 0v2a2 2 0 01-2 2H8a2 2 0 01-2-2V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e496f] mb-3">Entreprises</h3>
              <p className="text-gray-700 text-sm">Bureaux, usines et commerces avec besoins de climatisation industrielle.</p>
            </div>

            <div className="bg-[#eff4f5] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#49bce5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e496f] mb-3">Santé</h3>
              <p className="text-gray-700 text-sm">Hôpitaux, cliniques et établissements de santé avec normes sanitaires strictes.</p>
            </div>

            <div className="bg-[#eff4f5] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#49bce5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e496f] mb-3">Sport & Loisirs</h3>
              <p className="text-gray-700 text-sm">Salles de sport, piscines et centres de loisirs avec gestion de l&apos;humidité.</p>
            </div>

            <div className="bg-[#eff4f5] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#49bce5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e496f] mb-3">Hôtellerie</h3>
              <p className="text-gray-700 text-sm">Hôtels, restaurants et établissements touristiques avec confort optimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 bg-gradient-to-br from-[#1e496f] to-[#49bce5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Conformité et certifications
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Respect des normes et réglementations pour tous vos projets professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">RT 2012 / RE 2020</h3>
              <p className="mb-4">Conformité aux réglementations thermiques en vigueur pour tous vos bâtiments.</p>
              <ul className="space-y-2 text-sm">
                <li>• Calculs thermiques réglementaires</li>
                <li>• Attestations de conformité</li>
                <li>• Suivi des performances</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">F-Gas</h3>
              <p className="mb-4">Certification F-Gas pour la manipulation des fluides frigorigènes.</p>
              <ul className="space-y-2 text-sm">
                <li>• Techniciens certifiés F-Gas</li>
                <li>• Traçabilité des fluides</li>
                <li>• Maintenance conforme</li>
              </ul>
            </div>

            
          </div>

        </div>
      </section>

      {/* Maintenance Contracts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
              Contrats de maintenance
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Maintenance préventive et curative adaptée aux besoins professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Maintenance préventive programmée selon vos contraintes d&apos;exploitation</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Intervention d&apos;urgence 24h/24 pour les pannes critiques</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Rapports détaillés et traçabilité de toutes les interventions</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Optimisation énergétique et conseils d&apos;amélioration continue</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Formation de vos équipes techniques aux bonnes pratiques</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Gestion des pièces de rechange et stock de sécurité</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Suivi des performances et alertes préventives</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Conformité réglementaire et mise à jour des certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
        <section className="py-16 bg-[#eff4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
              Nos réalisations commerciales
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos installations pour professionnels dans le Var
            </p>
          </div>

          {/* Photo Album Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {commercialPhotoData.map((category) => (
              <div
                key={category.name}
                className="bg-white border border-gray-200 p-6 text-center cursor-pointer hover:border-[#49bce5] transition-colors"
                onClick={() => setIsAlbumOpen(true)}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={category.thumbnail}
                    alt={category.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1e496f] mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.photos.length} photos
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
            Votre projet professionnel nous intéresse
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contactez nos experts pour une étude technique gratuite et un devis personnalisé pour votre projet de climatisation commerciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-8 py-3 text-lg">
                DEMANDER UNE ÉTUDE
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#1e496f] text-[#1e496f] hover:bg-[#1e496f] hover:text-white px-8 py-3 text-lg">
                NOUS CONTACTER
              </Button>
            </Link>
          </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold mb-4">
                <span className="text-red-600">Clima&apos;S</span>
                <div className="text-sm text-[#1e496f] font-normal">Climatisation & Chauffage</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[#1e496f]">📞</span>
                  <a href="tel:0494XXXXXX" className="text-gray-600 hover:text-[#1e496f]">04 94 XX XX XX</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#1e496f]">📱</span>
                  <a href="tel:06XXXXXXXX" className="text-gray-600 hover:text-[#1e496f]">06 XX XX XX XX</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#1e496f]">✉️</span>
                  <a href="mailto:contact@technicool-france.fr" className="text-gray-600 hover:text-[#1e496f]">contact@technicool-france.fr</a>
                </div>
              </div>
            </div>

            {/* Coverage Area */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Zone de couverture</h4>
              <p className="text-gray-600">Var, Toulon et sa région</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>
              © Clima&apos;S Air Conditioning Limited |
              <Link href="/privacy-policy" className="hover:text-[#1e496f] mx-1">Politique de confidentialité</Link> |
              <Link href="/cookie-policy" className="hover:text-[#1e496f] mx-1">Politique des cookies</Link> |
              <Link href="/terms-of-use" className="hover:text-[#1e496f] mx-1">Conditions d&apos;utilisation</Link> |
              <Link href="/terms-conditions" className="hover:text-[#1e496f] mx-1">Termes et conditions</Link> |
              <Link href="/sitemap" className="hover:text-[#1e496f] mx-1">Plan du site</Link> |
              Site web par <a href="https://www.design-m.co.uk" className="hover:text-[#1e496f]">Design M</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Photo Album Modal */}
      <PhotoAlbum
        isOpen={isAlbumOpen}
        onClose={() => setIsAlbumOpen(false)}
        categories={commercialPhotoData}
        title="Nos réalisations commerciales"
      />
    </div>
  );
}
