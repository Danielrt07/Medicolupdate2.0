import * as React from "react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Dental Procedures | MediCol",
  description: "Experience state-of-the-art dental treatments with AI-guided precision and same-day solutions at MediCol in Medellín, Colombia."
}

export default function DentalPage() {
  const procedures = [
    {
      name: "Same-Day Dental Implants",
      description: "Advanced immediate-load implants using 3D-guided placement technology",
      price: "Starting from $2,000 per implant"
    },
    {
      name: "Full Mouth Reconstruction",
      description: "Complete smile transformation using AI-designed treatment planning",
      price: "Starting from $15,000"
    },
    {
      name: "Digital Smile Design",
      description: "AI-powered smile visualization and treatment planning for perfect results",
      price: "Starting from $500"
    },
    {
      name: "All-on-4 Implants",
      description: "Full arch replacement using computer-guided implant placement",
      price: "Starting from $12,000"
    },
    {
      name: "Zirconia Crowns",
      description: "Premium metal-free crowns with superior aesthetics and durability",
      price: "Starting from $800 per crown"
    },
    {
      name: "Porcelain Veneers",
      description: "Ultra-thin custom veneers designed with 3D imaging for natural appearance",
      price: "Starting from $600 per tooth"
    },
    {
      name: "Invisible Aligners",
      description: "Custom clear aligners with AI-optimized treatment progression",
      price: "Starting from $3,500"
    },
    {
      name: "Laser Gum Contouring",
      description: "Precise gum reshaping using advanced laser technology",
      price: "Starting from $800"
    },
    {
      name: "3D-Printed Restorations",
      description: "Same-day custom dental restorations using latest 3D printing technology",
      price: "Starting from $500 per tooth"
    },
    {
      name: "Teeth Whitening",
      description: "Advanced LED-accelerated professional whitening system",
      price: "Starting from $400"
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