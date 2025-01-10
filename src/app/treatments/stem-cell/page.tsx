import * as React from "react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Stem Cell Therapy | MediCol",
  description: "Experience cutting-edge regenerative treatments with exosome and stem cell technology at MediCol in Medellín, Colombia."
}

export default function StemCellPage() {
  const treatments = [
    {
      name: "Exosome Hair Restoration",
      description: "Revolutionary hair regrowth combining exosomes with red light therapy for enhanced results",
      price: "Starting from $6,500"
    },
    {
      name: "Joint Regeneration",
      description: "Advanced stem cell therapy for joint repair and inflammation reduction",
      price: "Starting from $8,000"
    },
    {
      name: "Anti-Aging Stem Cell Therapy",
      description: "Comprehensive rejuvenation using your own stem cells for natural aging reversal",
      price: "Starting from $12,000"
    },
    {
      name: "Sports Injury Recovery",
      description: "Accelerated healing using targeted stem cell therapy and growth factors",
      price: "Starting from $7,500"
    },
    {
      name: "Autoimmune Treatment",
      description: "Innovative stem cell protocols to modulate immune response and reduce inflammation",
      price: "Starting from $15,000"
    },
    {
      name: "Facial Rejuvenation",
      description: "Combined stem cell and exosome therapy for natural facial regeneration",
      price: "Starting from $8,500"
    },
    {
      name: "Skin Regeneration",
      description: "Advanced treatment for skin repair and rejuvenation using stem cell technology",
      price: "Starting from $6,000"
    },
    {
      name: "Inflammaging Treatment",
      description: "Targeted therapy to combat aging caused by chronic inflammation",
      price: "Starting from $9,000"
    },
    {
      name: "Red Light Therapy",
      description: "Enhanced cellular regeneration using advanced light technology",
      price: "Starting from $5,500"
    },
    {
      name: "Defensin Treatment",
      description: "Cutting-edge therapy using regenerative molecules for tissue repair",
      price: "Starting from $7,000"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            Stem Cell Therapy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Experience the future of regenerative medicine with our 2025 breakthrough 
            treatments, combining exosome technology with advanced stem cell protocols.
          </p>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">Available Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">{treatment.name}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <p className="text-primary font-semibold mb-4">{treatment.price}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">2025 Breakthroughs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Exosome Technology</h3>
              <p className="text-gray-600">
                Next-generation cell signaling for enhanced regenerative outcomes
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Personalized Treatment</h3>
              <p className="text-gray-600">
                AI-optimized protocols based on your unique cellular profile
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Combined Therapies</h3>
              <p className="text-gray-600">
                Synergistic treatment approaches for maximum effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Scientific Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Clinical Research</h3>
              <p className="text-gray-600">
                Ongoing collaboration with leading research institutions and continuous clinical trials
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                State-of-the-art lab facilities with rigorous quality control protocols
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-6">Start Your Healing Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn how our advanced stem cell treatments
            can help you achieve optimal health and recovery.
          </p>
          <Button size="lg" className="text-lg">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
} 