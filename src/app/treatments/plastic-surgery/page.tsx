import * as React from "react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Plastic Surgery | MediCol",
  description: "Transform with confidence through our comprehensive range of aesthetic procedures at MediCol in Medellín, Colombia."
}

export default function PlasticSurgeryPage() {
  const procedures = [
    {
      name: "Early-Intervention Facelifts",
      description: "Preventative rather than restorative approach for patients in their 40s and 50s, stopping the clock for 10-15 years",
      price: "Starting from $12,000"
    },
    {
      name: "Invisilift™",
      description: "Revolutionary nearly-invisible facelift technique for subtle, natural-looking rejuvenation",
      price: "Starting from $10,000"
    },
    {
      name: "Custom Chin Implants",
      description: "AI-designed chin enhancement for improved facial harmony and jawline definition",
      price: "Starting from $5,500"
    },
    {
      name: "AI-Guided Rhinoplasty",
      description: "Precision nose reshaping using advanced AI imaging for optimal facial balance",
      price: "Starting from $6,500"
    },
    {
      name: "Natural Breast Augmentation",
      description: "Enhanced results using latest implant technology or fat transfer for natural feel and look",
      price: "Starting from $5,000"
    },
    {
      name: "High-Definition Liposuction",
      description: "Advanced body contouring with ultrasonic technology for athletic, sculpted results",
      price: "Starting from $4,500"
    },
    {
      name: "Brazilian Butt Lift",
      description: "Natural enhancement using advanced fat transfer techniques and 3D modeling",
      price: "Starting from $7,000"
    },
    {
      name: "Mommy Makeover",
      description: "Customized combination of procedures for post-pregnancy body restoration",
      price: "Starting from $15,000"
    },
    {
      name: "Blepharoplasty",
      description: "Precise eyelid rejuvenation using minimally invasive techniques",
      price: "Starting from $3,500"
    },
    {
      name: "Mini Face Lift",
      description: "Less invasive facelift alternative with quicker recovery time",
      price: "Starting from $8,000"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            Plastic Surgery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Experience the future of aesthetic enhancement with our 2025 innovative procedures, 
            combining AI precision with artistic expertise for natural-looking results.
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

      {/* Innovation Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">2025 Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">AI-Guided Precision</h3>
              <p className="text-gray-600">
                Advanced AI technology analyzes facial features and predicts results for optimal outcomes
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Natural Aesthetics</h3>
              <p className="text-gray-600">
                Focus on subtle enhancements that complement your natural beauty
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Preventative Approach</h3>
              <p className="text-gray-600">
                Early intervention procedures for longer-lasting, more natural results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Luxury Recovery Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">5-Star Accommodations</h3>
              <p className="text-gray-600">
                Recover in luxury with 24/7 medical support, private nursing, and concierge service
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Comprehensive Care</h3>
              <p className="text-gray-600">
                Advanced recovery protocols including hyperbaric oxygen therapy and LED light treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a virtual consultation with our expert surgeons to discuss your goals
            and create your personalized treatment plan.
          </p>
          <Button size="lg" className="text-lg">
            Book Virtual Consultation
          </Button>
        </div>
      </section>
    </div>
  )
} 