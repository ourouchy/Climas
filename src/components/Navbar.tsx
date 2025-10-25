"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/domestic", label: "Domestique" },
    { href: "/commercial", label: "Commercial" },
    { href: "/contact", label: "Contact" },
    { href: "/photo-gallery", label: "Galerie" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-red-600">Clima&apos;S</span>
              <div className="text-xs sm:text-sm text-[#1e496f] font-normal">Climatisation & Chauffage</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? "text-[#1e496f] font-semibold"
                    : "text-gray-700 hover:text-[#1e496f]"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-4 py-2 text-sm hidden lg:block">
            APPEL: 04 94 XX XX XX
          </Button>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[#1e496f] bg-[#eff4f5]"
                      : "text-gray-700 hover:text-[#1e496f] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white w-full py-3">
                  APPEL: 04 94 XX XX XX
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
