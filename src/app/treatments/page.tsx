import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Medical Treatments | MediCol",
  description: "Explore our comprehensive range of medical treatments, from plastic surgery to stem cell therapy and dental procedures in Medellín, Colombia."
}

export default function TreatmentsPage() {
  const treatments = [
    {
      category: "Plastic Surgery",
      description: "Transform with confidence through our comprehensive range of aesthetic procedures, featuring the latest 2025 innovations",
      link: "/treatments/plastic-surgery",
      procedures: [
        "Early-Intervention Facelifts",
        "Invisilift™",
        "Custom Chin Implants",
        "AI-Guided Rhinoplasty",
        "Natural Breast Augmentation",
        "High-Definition Liposuction",
        "Brazilian Butt Lift",
        "Mommy Makeover",
        "Blepharoplasty",
        "Mini Face Lift"
      ],
      priceRange: "$3,500 - $15,000",
      image: "/images/plastic-surgery.jpg"
    },
    {
      category: "Stem Cell Therapy",
      description: "Advanced regenerative treatments using cutting-edge exosome and stem cell technology for optimal health and recovery",
      link: "/treatments/stem-cell",
      procedures: [
        "Exosome Hair Restoration",
        "Joint Regeneration",
        "Anti-Aging Stem Cell Therapy",
        "Sports Injury Recovery",
        "Autoimmune Treatment",
        "Facial Rejuvenation",
        "Skin Regeneration",
        "Inflammaging Treatment",
        "Red Light Therapy",
        "Defensin Treatment"
      ],
      priceRange: "$5,500 - $20,000",
      image: "/images/stem-cell.jpg"
    },
    {
      category: "Dental Procedures",
      description: "Achieve your perfect smile with our state-of-the-art dental treatments and AI-guided precision",
      link: "/treatments/dental",
      procedures: [
        "Same-Day Dental Implants",
        "Full Mouth Reconstruction",
        "Digital Smile Design",
        "All-on-4 Implants",
        "Zirconia Crowns",
        "Porcelain Veneers",
        "Invisible Aligners",
        "Laser Gum Contouring",
        "3D-Printed Restorations",
        "Teeth Whitening"
      ],
      priceRange: "$400 - $15,000",
      image: "/images/dental.jpg"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            Our Medical Treatments
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            World-class procedures at a fraction of US/EU prices, performed by internationally 
            certified specialists in state-of-the-art facilities.
          </p>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {treatments.map((treatment) => (
              <div key={treatment.category} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <div className="relative h-full w-full">
                      <Image
                        src={treatment.image}
                        alt={treatment.category}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-playfair mb-4">{treatment.category}</h2>
                    <p className="text-xl text-gray-600 mb-6">{treatment.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-bold mb-3">Popular Procedures:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {treatment.procedures.map((procedure) => (
                          <li key={procedure} className="flex items-center text-gray-600">
                            <span className="mr-2">•</span>
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <p className="text-gray-600">
                        Price Range: <span className="font-semibold text-primary">{treatment.priceRange}</span>
                      </p>
                    </div>

                    <Link href={treatment.link}>
                      <Button size="lg" className="text-lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">The MediCol Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">All-Inclusive Care</h3>
              <p className="text-gray-600">
                From airport pickup to luxury recovery accommodations, we handle every aspect of your medical journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Internationally certified doctors with extensive experience treating patients from around the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear, upfront pricing with no hidden fees. Save 40-70% compared to US prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our medical team to discuss your goals
            and create your personalized treatment plan.
          </p>
          <Button size="lg" variant="default" className="text-lg">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
} 