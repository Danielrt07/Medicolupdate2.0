import * as React from "react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Dental Procedures | MediCol",
  description: "Experience state-of-the-art dental treatments with AI-guided precision and same-day solutions at MediCol in Medellín, Colombia."
}

export default function DentalPage() {
  const procedures = [
    {
      name: "Smile Design (Diseño)",
      description: "Complete smile design planning and visualization",
      price: "$850 | US Price: $2,500+"
    },
    {
      name: "Upper Arch Design (Diseño superior)",
      description: "Customized design for upper teeth",
      price: "$625 | US Price: $1,800+"
    },
    {
      name: "Micro Design (Micro diseño)",
      description: "Precise micro adjustments for perfect aesthetics",
      price: "$500 | US Price: $1,500+"
    },
    {
      name: "Small Resin Repair",
      description: "Minor composite resin repairs and adjustments",
      price: "$37.50 | US Price: $150-200"
    },
    {
      name: "Complete Veneer (Carilla completa)",
      description: "Full dental veneer application",
      price: "$75 | US Price: $800-2,000"
    },
    {
      name: "Laser Teeth Whitening",
      description: "Advanced laser whitening treatment",
      price: "$300 | US Price: $1,000+"
    },
    {
      name: "Custom Whitening Trays",
      description: "Professional take-home whitening kit",
      price: "$200 | US Price: $400-600"
    },
    {
      name: "Protective Guard",
      description: "Custom-made dental protection",
      price: "$62.50 | US Price: $300-500"
    },
    {
      name: "Botox for Bruxism",
      description: "TMJ and teeth grinding treatment",
      price: "$500 | US Price: $1,000-1,500"
    },
    {
      name: "Orthodontic Setup",
      description: "Initial orthodontic treatment setup",
      price: "$175 | US Price: $500-800"
    },
    {
      name: "Single Root Canal",
      description: "Endodontic treatment for single-rooted teeth",
      price: "$300 | US Price: $1,000-1,500"
    },
    {
      name: "Multi-Root Canal",
      description: "Complex endodontic treatment",
      price: "$375 | US Price: $1,200-1,800"
    },
    {
      name: "Basic Denture",
      description: "Standard removable prosthetic",
      price: "$375 | US Price: $1,500-3,000"
    },
    {
      name: "High-Impact Denture",
      description: "Premium quality durable denture",
      price: "$625 | US Price: $2,000-4,000"
    },
    {
      name: "Dental Implants",
      description: "Titanium implant with restoration",
      price: "$750 - $1,500 | US Price: $3,000-4,500"
    },
    {
      name: "Dental Crowns",
      description: "Custom-fitted dental crown",
      price: "$625 | US Price: $1,200-2,000"
    },
    {
      name: "Zirconia Crown",
      description: "Premium metal-free zirconia restoration",
      price: "$700 | US Price: $1,500-2,500"
    },
    {
      name: "Inlay/Onlay",
      description: "Custom ceramic restoration",
      price: "$500 | US Price: $1,000-1,500"
    },
    {
      name: "Temporary Crown",
      description: "Provisional crown protection",
      price: "$175 | US Price: $400-800"
    },
    {
      name: "Post and Core",
      description: "Dental post for crown support",
      price: "$175 | US Price: $500-900"
    },
    {
      name: "Night Guard",
      description: "Custom-made night protection",
      price: "$300 | US Price: $500-1,000"
    },
    {
      name: "Ceramic Veneer",
      description: "Premium ceramic dental veneer",
      price: "$500 | US Price: $1,500-2,500"
    },
    {
      name: "Professional Cleaning",
      description: "Deep cleaning and polishing",
      price: "$62.50 | US Price: $100-300"
    },
    {
      name: "Deep Scaling",
      description: "Advanced periodontal cleaning",
      price: "$125 | US Price: $200-400"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            Dental Procedures
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Experience the future of dentistry with AI-guided precision, same-day solutions,
            and cutting-edge technology for your perfect smile.
          </p>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">Our Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure) => (
              <div key={procedure.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">{procedure.name}</h3>
                <p className="text-gray-600 mb-4">{procedure.description}</p>
                <p className="text-primary font-semibold mb-4">{procedure.price}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">2025 Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">AI-Guided Treatment</h3>
              <p className="text-gray-600">
                Advanced AI technology for precise treatment planning and optimal results
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Same-Day Solutions</h3>
              <p className="text-gray-600">
                3D printing and CAD/CAM technology for immediate dental restorations
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Digital Precision</h3>
              <p className="text-gray-600">
                3D scanning and digital impressions for perfect-fit restorations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Comfort & Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sedation Options</h3>
              <p className="text-gray-600">
                Multiple sedation choices including IV sedation for anxiety-free treatment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Luxury Experience</h3>
              <p className="text-gray-600">
                Premium amenities and personalized care in a spa-like environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-6">Ready for Your New Smile?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with a virtual consultation including AI smile simulation to
            visualize your perfect results.
          </p>
          <Button size="lg" className="text-lg">
            Book Virtual Consultation
          </Button>
        </div>
      </section>
    </div>
  )
} 