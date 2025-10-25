"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PhotoAlbum from "@/components/PhotoAlbum";
import { domesticPhotoData } from "@/lib/domesticPhotoData";
import { useState } from "react";

export default function Domestic() {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#eff4f5] to-white py-8 sm:py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#49bce5] text-base sm:text-lg mb-4">Climatisation Domestique</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1e496f] mb-6 lg:mb-8 leading-tight">
                Solutions climatisation pour votre domicile
              </h1>
              <p className="text-gray-700 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Transformez votre maison en un havre de confort avec nos systèmes de climatisation domestique. 
                Installation professionnelle, maintenance régulière et support technique dans tout le Var.
              </p>
              <Link href="/contact">
                <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg w-full sm:w-auto">
                  DEMANDER UN DEVIS GRATUIT
                </Button>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="https://ext.same-assets.com/3359485804/3142369264.jpeg"
                alt="Installation de climatisation domestique"
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
              Nos services domestiques
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              De l&apos;installation à la maintenance, nous vous accompagnons pour un confort optimal dans votre domicile
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Installation */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#49bce5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e496f] mb-4">Installation</h3>
              <p className="text-gray-700">
                Installation complète de systèmes de climatisation adaptés à votre domicile et à vos besoins.
              </p>
            </div>

            {/* Maintenance */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#49bce5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e496f] mb-4">Maintenance</h3>
              <p className="text-gray-700">
                Entretien régulier et réparations pour garantir la performance et la longévité de votre système.
              </p>
            </div>

            {/* Réparation */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#49bce5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e496f] mb-4">Réparation</h3>
              <p className="text-gray-700">
                Dépannage rapide et réparation de tous types de pannes sur vos équipements de climatisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
        <section className="py-16 bg-[#eff4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
                Notre processus d&apos;installation
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Étude gratuite</h3>
                    <p className="text-gray-700">Visite à domicile pour évaluer vos besoins et proposer la solution optimale.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Devis détaillé</h3>
                    <p className="text-gray-700">Proposition personnalisée avec prix transparent et délais d&apos;installation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Installation professionnelle</h3>
                    <p className="text-gray-700">Pose par nos techniciens qualifiés avec respect de votre domicile.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#49bce5] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e496f] mb-2">Mise en service</h3>
                    <p className="text-gray-700">Test et réglage du système avec formation à l&apos;utilisation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3359485804/282902617.jpeg"
                alt="Processus d&apos;installation climatisation"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
              Pourquoi choisir la climatisation domestique ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez tous les avantages d&apos;un système de climatisation pour votre domicile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Confort optimal été comme hiver dans toutes les pièces</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Économies d&apos;énergie grâce aux technologies modernes</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Amélioration de la qualité de l&apos;air intérieur</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Contrôle précis de la température pièce par pièce</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Fonctionnement silencieux pour un confort optimal</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Augmentation de la valeur de votre propriété</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Garantie étendue et service après-vente</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Installation discrète et esthétique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16 bg-gradient-to-br from-[#1e496f] to-[#49bce5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Maintenance et entretien
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Gardez votre système en parfait état avec nos services de maintenance professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Contrôle technique</h3>
              <p className="mb-4">Vérification complète du système et de ses performances.</p>
              <ul className="space-y-2 text-sm">
                <li>• Test de fonctionnement</li>
                <li>• Vérification des connexions</li>
                <li>• Contrôle des niveaux</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Nettoyage</h3>
              <p className="mb-4">Nettoyage approfondi des unités intérieures et extérieures.</p>
              <ul className="space-y-2 text-sm">
                <li>• Dépoussiérage des filtres</li>
                <li>• Nettoyage des évaporateurs</li>
                <li>• Désinfection des conduits</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Réparation</h3>
              <p className="mb-4">Dépannage et réparation de toutes pannes détectées.</p>
              <ul className="space-y-2 text-sm">
                <li>• Diagnostic précis</li>
                <li>• Remplacement des pièces</li>
                <li>• Test de fonctionnement</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#1e496f] px-8 py-3 text-lg">
                PROGRAMMER UN ENTRETIEN
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
              Nos réalisations domestiques
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos installations climatisation pour particuliers dans le Var
            </p>
          </div>

          {/* Photo Album Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {domesticPhotoData.map((category) => (
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
      <section className="py-16 bg-[#eff4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e496f] mb-6">
            Prêt à transformer votre domicile ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contactez nos experts pour une étude gratuite et un devis personnalisé pour votre projet de climatisation domestique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-8 py-3 text-lg">
                DEMANDER UN DEVIS
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
        categories={domesticPhotoData}
        title="Nos réalisations domestiques"
      />
    </div>
  );
}
