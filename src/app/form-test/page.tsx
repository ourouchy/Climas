import ContactForm from "@/components/ContactForm";

export default function FormTest() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e496f] mb-4">
            Test du formulaire de contact
          </h1>
          <p className="text-xl text-gray-700">
            Testez le formulaire avec les différents types de service
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}
