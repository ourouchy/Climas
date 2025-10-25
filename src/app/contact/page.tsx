import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Form and Contact Info */}
      <section className="py-16 bg-[#eff4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e496f] mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-700">
              Demandez un devis gratuit ou contactez-nous directement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-[#1e496f] mb-6">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Téléphone</h4>
                    <a href="tel:0494XXXXXX" className="text-[#1e496f] hover:underline">04 94 XX XX XX</a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Mobile</h4>
                    <a href="tel:06XXXXXXXX" className="text-[#1e496f] hover:underline">06 XX XX XX XX</a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:contact@technicool-france.fr" className="text-[#1e496f] hover:underline">contact@technicool-france.fr</a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Adresse</h4>
                    <p className="text-gray-600">Clima'S Air Conditioning Ltd<br />Var, Toulon et sa région</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-[#1e496f] mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>8h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-[#1e496f] mb-4">
                  Zone de couverture
                </h3>
                <p className="text-gray-700 mb-4">
                  Nous intervenons dans tout le Var et ses environs :
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Toulon et agglomération</li>
                  <li>• Hyères et ses environs</li>
                  <li>• Fréjus, Saint-Raphaël</li>
                  <li>• Draguignan et sa région</li>
                  <li>• Brignoles et alentours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1e496f] mb-4">
              Notre localisation
            </h2>
            <p className="text-gray-700">
              Trouvez-nous facilement dans le Var
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-gray-200 border border-gray-300 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.1234567890!2d5.9280!3d43.1247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI5LjAiTiA1wrA1NSc0MC44IkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Clima'S Air Conditioning"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Clima'S Air Conditioning Ltd</strong><br />
              Var, Toulon et sa région
            </p>
            <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-6 py-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ouvrir dans Google Maps
            </Button>
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
                <span className="text-red-600">Clima'S</span>
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
              © Clima'S Air Conditioning Limited |
              <Link href="/privacy-policy" className="hover:text-[#1e496f] mx-1">Politique de confidentialité</Link> |
              <Link href="/cookie-policy" className="hover:text-[#1e496f] mx-1">Politique des cookies</Link> |
              <Link href="/terms-of-use" className="hover:text-[#1e496f] mx-1">Conditions d'utilisation</Link> |
              <Link href="/terms-conditions" className="hover:text-[#1e496f] mx-1">Termes et conditions</Link> |
              <Link href="/sitemap" className="hover:text-[#1e496f] mx-1">Plan du site</Link> |
              Site web par <a href="https://www.design-m.co.uk" className="hover:text-[#1e496f]">Design M</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
