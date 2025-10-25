"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FormData {
  serviceType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  message: string;
  // Commercial specific fields
  companyName?: string;
  jobTitle?: string;
  buildingType?: string;
  projectSize?: string;
  budget?: string;
  timeline?: string;
  // Domestic specific fields
  propertyType?: string;
  roomCount?: string;
  currentSystem?: string;
  preferredContact?: string;
}

export default function ContactForm() {
  const [serviceType, setServiceType] = useState<string>("domestic");
  const [formData, setFormData] = useState<FormData>({
    serviceType: "domestic",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    message: "",
  });

  const handleServiceTypeChange = (value: string) => {
    setServiceType(value);
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Formulaire envoyé avec succès ! Nous vous contacterons bientôt.");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Service Type Selection */}
        <div className="bg-white border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Type de service
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleServiceTypeChange("domestic")}
              className={`p-4 border transition-all ${
                serviceType === "domestic"
                  ? "border-[#49bce5] bg-[#49bce5]/5"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="text-center">
                <h4 className="font-medium text-gray-800 mb-1">Domestique</h4>
                <p className="text-sm text-gray-600">Climatisation pour votre domicile</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleServiceTypeChange("commercial")}
              className={`p-4 border transition-all ${
                serviceType === "commercial"
                  ? "border-[#49bce5] bg-[#49bce5]/5"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="text-center">
                <h4 className="font-medium text-gray-800 mb-1">Commercial</h4>
                <p className="text-sm text-gray-600">Solutions pour professionnels</p>
              </div>
            </button>
          </div>
        </div>

        {/* Form Fields */}
        {serviceType && (
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-6">
              Informations de contact
            </h3>

            {/* Personal Information */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Prénom {serviceType === "domestic" && "*"}
                </label>
                <input
                  type="text"
                  required={serviceType === "domestic"}
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Nom {serviceType === "domestic" && "*"}
                </label>
                <input
                  type="text"
                  required={serviceType === "domestic"}
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="04 94 XX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="Numéro et nom de rue"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Ville
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="Toulon"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Code postal
                </label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                  placeholder="83000"
                />
              </div>
            </div>

            {/* Service-specific fields */}
            {serviceType === "commercial" && (
              <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Nom de l'entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.companyName || ""}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Fonction
                    </label>
                    <input
                      type="text"
                      value={formData.jobTitle || ""}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                      placeholder="Directeur, Gestionnaire, etc."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Type de bâtiment
                    </label>
                    <select
                      value={formData.buildingType || ""}
                      onChange={(e) => handleInputChange("buildingType", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="office">Bureaux</option>
                      <option value="school">École/Établissement scolaire</option>
                      <option value="municipality">Bâtiment municipal</option>
                      <option value="healthcare">Établissement de santé</option>
                      <option value="retail">Commerce</option>
                      <option value="industrial">Industriel</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Taille du projet
                    </label>
                    <select
                      value={formData.projectSize || ""}
                      onChange={(e) => handleInputChange("projectSize", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="small">Petit projet (&lt; 100m²)</option>
                      <option value="medium">Projet moyen (100-500m²)</option>
                      <option value="large">Grand projet (500-2000m²)</option>
                      <option value="xlarge">Très grand projet (&gt; 2000m²)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Budget estimé
                    </label>
                    <select
                      value={formData.budget || ""}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="under-10k">Moins de 10 000€</option>
                      <option value="10k-25k">10 000€ - 25 000€</option>
                      <option value="25k-50k">25 000€ - 50 000€</option>
                      <option value="50k-100k">50 000€ - 100 000€</option>
                      <option value="over-100k">Plus de 100 000€</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Délai souhaité
                    </label>
                    <select
                      value={formData.timeline || ""}
                      onChange={(e) => handleInputChange("timeline", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="urgent">Urgent (&lt; 1 mois)</option>
                      <option value="1-3months">1-3 mois</option>
                      <option value="3-6months">3-6 mois</option>
                      <option value="6-12months">6-12 mois</option>
                      <option value="planning">En phase de planification</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {serviceType === "domestic" && (
              <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Type de propriété
                    </label>
                    <select
                      value={formData.propertyType || ""}
                      onChange={(e) => handleInputChange("propertyType", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="house">Maison individuelle</option>
                      <option value="apartment">Appartement</option>
                      <option value="villa">Villa</option>
                      <option value="duplex">Duplex</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Nombre de pièces à climatiser
                    </label>
                    <select
                      value={formData.roomCount || ""}
                      onChange={(e) => handleInputChange("roomCount", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="1">1 pièce</option>
                      <option value="2-3">2-3 pièces</option>
                      <option value="4-5">4-5 pièces</option>
                      <option value="6+">6+ pièces</option>
                      <option value="whole-house">Toute la maison</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Système actuel
                    </label>
                    <select
                      value={formData.currentSystem || ""}
                      onChange={(e) => handleInputChange("currentSystem", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="none">Aucun système</option>
                      <option value="old-ac">Ancienne climatisation</option>
                      <option value="heating-only">Chauffage uniquement</option>
                      <option value="portable">Climatiseurs mobiles</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Préférence de contact
                    </label>
                    <select
                      value={formData.preferredContact || ""}
                      onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="phone">Téléphone</option>
                      <option value="email">Email</option>
                      <option value="both">Les deux</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-1">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#49bce5]"
                placeholder={
                  serviceType === "commercial"
                    ? "Décrivez votre projet commercial, vos besoins spécifiques, contraintes techniques..."
                    : "Décrivez vos besoins en climatisation, pièces à équiper, préférences..."
                }
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-[#1e496f] hover:bg-[#1e496f]/90 text-white px-6 py-2"
              >
                ENVOYER LA DEMANDE
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
