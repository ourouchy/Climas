import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#eff4f5] to-white py-8 sm:py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#49bce5] text-base sm:text-lg mb-4">Bienvenue chez Clima'S</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1e496f] mb-6 lg:mb-8 leading-tight">
                Installation et maintenance de climatisation
              </h1>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="https://ext.same-assets.com/3359485804/2092674471.jpeg"
                alt="Unité de climatisation"
                width={600}
                height={400}
                className="rounded-lg w-full h-48 sm:h-64 lg:h-80 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-1 lg:order-1">
              <Image
                src="https://ext.same-assets.com/3359485804/282902617.jpeg"
                alt="Couple relaxing with air conditioning"
                width={600}
                height={400}
                className="rounded-lg w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e496f] mb-4 lg:mb-6">
                Votre spécialiste climatisation dans le Var
              </h2>
              <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                Que vous ayez besoin de climatisation sur votre lieu de travail ou à domicile dans le Var, laissez Clima'S vous conseiller sur la meilleure conception et sélection de produits. Nous effectuerons une étude de site gratuite de votre propriété et travaillerons rapidement et efficacement pour installer un système facile à gérer qui vous apportera tous les avantages d'une climatisation et d'un chauffage modernes et propres.
              </p>
              <p className="text-gray-700 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                Avec plus de 20 ans d'expérience dans l'installation, l'entretien et la réparation de systèmes de climatisation dans le Var, Toulon et sa région, nous avons les compétences et les connaissances pour garantir une expérience sans stress à chaque fois.
              </p>
              <Link href="/contact">
                <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg w-full sm:w-auto">
                  NOUS CONTACTER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[#1e496f] to-[#49bce5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 lg:mb-16">
            Nos services
          </h2>

          <div className="space-y-12 lg:space-y-20">
            {/* Domestic */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              <div className="flex flex-col items-center lg:items-end order-1 lg:order-1">
                <div className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold text-center lg:text-right mb-4 lg:mb-0">
                  Domestique
                </div>
              </div>
              <div className="relative order-2 lg:order-2">
                <Image
                  src="https://ext.same-assets.com/3359485804/3142369264.jpeg"
                  alt="Installation de climatisation domestique"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-48 sm:h-64 lg:h-[300px] object-cover"
                />
              </div>
              <div className="order-3 lg:order-3">
                <p className="text-white mb-3 lg:mb-4 text-base lg:text-lg">
                  Climatisation et production d'eau chaude pour votre domicile.
                </p>
                <p className="text-white mb-6 lg:mb-8 text-base lg:text-lg">
                  Une alternative très efficace aux produits de chauffage au gaz de ville et au fioul.
                </p>
                <div className="space-y-3 lg:space-y-4">
                  <Link href="/domestic">
                    <Button className="bg-[#49bce5] hover:bg-[#49bce5]/90 text-white w-full text-sm lg:text-base">
                      INSTALLATIONS →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Commercial */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              <div className="flex flex-col items-center lg:items-end order-1 lg:order-1">
                <div className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold text-center lg:text-right mb-4 lg:mb-0">
                  Commercial
                </div>
              </div>
              <div className="relative order-2 lg:order-2">
                <Image
                  src="https://ext.same-assets.com/3359485804/1811531807.jpeg"
                  alt="Climatisation commerciale espace de bureau"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-48 sm:h-64 lg:h-[300px] object-cover"
                />
              </div>
              <div className="order-3 lg:order-3">
                <p className="text-white mb-3 lg:mb-4 text-base lg:text-lg">
                  Climatisation et ventilation pour votre lieu de travail.
                </p>
                <p className="text-white mb-6 lg:mb-8 text-base lg:text-lg">
                  Conçu, installé et entretenu par nos experts qualifiés.
                </p>
                <div className="space-y-3 lg:space-y-4">
                  <Link href="/commercial">
                    <Button className="bg-[#49bce5] hover:bg-[#49bce5]/90 text-white w-full text-sm lg:text-base">
                      INSTALLATIONS →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Technicool */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#eff4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e496f] text-center mb-8 lg:mb-12">
            Pourquoi choisir Clima'S ?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#49bce5] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm sm:text-base">20 ans d'expérience dans l'industrie.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#49bce5] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm sm:text-base">De nombreux clients satisfaits dans les secteurs commercial et résidentiel.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#49bce5] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm sm:text-base">Nous sommes motivés par notre réputation et c'est pourquoi près de 99% de nos clients nous recommanderaient à d'autres.</p>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#49bce5] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm sm:text-base">Accès au portail client Clima'S pour une visibilité 24h/24 du statut des travaux et des rapports d'ingénieurs.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg w-full sm:w-auto">
                NOUS CONTACTER
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e496f] mb-4">
            Accréditations
          </h2>
          <p className="text-gray-700 mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg">
            Nous installons les meilleurs systèmes de climatisation domestique depuis plus de 20 ans.
          </p>
          <p className="text-gray-700 mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg">
            Nous sommes des ingénieurs en climatisation approuvés SafeContractor, TrustMark et Refcom.
          </p>

          <div className="flex justify-center items-center space-x-6 sm:space-x-8 lg:space-x-12 overflow-x-auto pb-4">
            <Image
              src="https://ext.same-assets.com/3359485804/1643803845.png"
              alt="Daikin Approved Installer"
              width={150}
              height={100}
              className="h-12 sm:h-14 lg:h-16 w-auto flex-shrink-0"
            />
            <Image
              src="https://ext.same-assets.com/3359485804/2828601788.jpeg"
              alt="Mitsubishi Electric"
              width={150}
              height={100}
              className="h-12 sm:h-14 lg:h-16 w-auto flex-shrink-0"
            />
            <Image
              src="https://ext.same-assets.com/3359485804/79945613.png"
              alt="Panasonic Pro Partners"
              width={150}
              height={100}
              className="h-12 sm:h-14 lg:h-16 w-auto flex-shrink-0"
            />
            <Image
              src="https://ext.same-assets.com/3359485804/1098065809.png"
              alt="RefCom F-Gas Certification"
              width={150}
              height={100}
              className="h-12 sm:h-14 lg:h-16 w-auto flex-shrink-0"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Logo */}
            <div className="text-center sm:text-left lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-4">
                <span className="text-red-600">Clima'S</span>
                <div className="text-xs sm:text-sm text-[#1e496f] font-normal">Climatisation & Chauffage</div>
              </div>
            </div>

            {/* Contact */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-gray-700 mb-3 lg:mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[#1e496f] text-sm">📞</span>
                  <a href="tel:0494XXXXXX" className="text-gray-600 hover:text-[#1e496f] text-sm sm:text-base">04 94 XX XX XX</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#1e496f] text-sm">📱</span>
                  <a href="tel:06XXXXXXXX" className="text-gray-600 hover:text-[#1e496f] text-sm sm:text-base">06 XX XX XX XX</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#1e496f] text-sm">✉️</span>
                  <a href="mailto:contact@technicool-france.fr" className="text-gray-600 hover:text-[#1e496f] text-sm sm:text-base break-all">contact@technicool-france.fr</a>
                </div>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-gray-700 mb-3 lg:mb-4 text-sm sm:text-base">Zone de couverture</h4>
              <p className="text-gray-600 text-sm sm:text-base">Var, Toulon et sa région</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-300 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-xs sm:text-sm text-gray-600">
            <p className="leading-relaxed">
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
