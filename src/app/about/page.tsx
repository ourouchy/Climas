import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-16 bg-[#eff4f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e496f] mb-8">
              À propos de nous
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Clima'S, votre spécialiste climatisation dans le Var depuis plus de 20 ans
            </p>
          </div>
        </section>
      </main>

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

            {/* Reviews */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Plus d'avis et photos sur :</h4>
              <p className="text-gray-600">Checkatrade</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>
              © Clima'S Air Conditioning Limited |
              <Link href="/privacy-policy" className="hover:text-[#1e496f] mx-1">Politique de confidentialité</Link> |
              Site web par Design M
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
