import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | MediCol - Medical Tourism in Medellín",
  description: "Discover why Medellín, Colombia is a world-class destination for medical tourism, combining excellent healthcare with stunning surroundings."
}

export default function AboutPage() {
  const cityHighlights = [
    {
      title: "Perfect Climate",
      description: "Known as the 'City of Eternal Spring' for its year-round pleasant temperatures and comfortable climate"
    },
    {
      title: "Modern Infrastructure",
      description: "Award-winning public transportation, modern hospitals, and world-class facilities"
    },
    {
      title: "Medical Excellence",
      description: "Home to Latin America's first and only JCI-accredited hospital, with many US-trained doctors"
    },
    {
      title: "Cultural Hub",
      description: "Rich culture, amazing food, friendly people, and a perfect blend of tradition and innovation"
    }
  ]

  const medicalAdvantages = [
    {
      title: "World-Class Healthcare",
      description: "Colombia ranks #22 in WHO's healthcare systems, ahead of many developed nations including Canada (#30) and the US (#37)"
    },
    {
      title: "Advanced Facilities",
      description: "State-of-the-art medical centers with the latest technology and internationally certified facilities"
    },
    {
      title: "Experienced Doctors",
      description: "Many physicians trained in the US and Europe, with extensive experience treating international patients"
    },
    {
      title: "Cost Effectiveness",
      description: "Save 40-70% on procedures while receiving the same or better quality of care"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            Welcome to Medellín
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Where world-class medical care meets the beauty and warmth of Colombia's most innovative city.
          </p>
        </div>
      </section>

      {/* City Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">The City of Eternal Spring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cityHighlights.map((highlight) => (
              <div key={highlight.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Excellence */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Colombia's Medical Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicalAdvantages.map((advantage) => (
              <div key={advantage.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About MediCol */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-8">About MediCol</h2>
            <p className="text-lg text-gray-600 mb-6">
              MediCol was founded with a vision to provide international patients access to Colombia's 
              exceptional medical care while experiencing the warmth and beauty of Medellín.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our network includes the city's top hospitals and clinics, internationally certified 
              doctors, and luxury recovery facilities. We handle everything from your initial 
              consultation to your comfortable recovery.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With MediCol, you're not just getting a medical procedure - you're getting a 
              transformative experience in one of Latin America's most dynamic cities.
            </p>
            <Button size="lg" className="text-lg">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Safety & Recognition */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Safety & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">International Accreditation</h3>
              <p className="text-gray-600">
                Medellín's top hospitals hold prestigious international accreditations, including JCI 
                (Joint Commission International) and AAAASF certifications, ensuring the highest 
                standards of patient care and safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Modern Medellín</h3>
              <p className="text-gray-600">
                Once known for its troubled past, Medellín has transformed into a global success story, 
                winning awards for innovation and urban planning. Today, it's one of Latin America's 
                safest and most progressive cities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 