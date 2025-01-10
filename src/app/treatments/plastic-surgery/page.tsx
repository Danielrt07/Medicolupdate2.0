import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield } from "lucide-react"

export const metadata = {
  title: "Plastic Surgery in Medellín | MediCol",
  description: "Expert plastic surgery procedures in Medellín. Transform your appearance with our skilled surgeons at significant cost savings."
}

const procedures = [
  {
    title: "Face & Neck",
    procedures: [
      {
        name: "Rhinoplasty",
        description: "Enhance facial harmony with precision nose reshaping",
        price: "From $4,500",
        link: "/treatments/plastic-surgery/rhinoplasty"
      },
      {
        name: "Blepharoplasty",
        description: "Rejuvenate your eyes for a more alert, youthful look",
        price: "From $3,000",
        link: "/treatments/plastic-surgery/blepharoplasty"
      }
    ]
  },
  {
    title: "Body Contouring",
    procedures: [
      {
        name: "Liposuction",
        description: "Sculpt your ideal body contours with targeted fat removal",
        price: "From $2,500",
        link: "/treatments/plastic-surgery/liposuction"
      },
      {
        name: "Tummy Tuck",
        description: "Achieve a flatter, more toned abdominal profile",
        price: "From $4,500",
        link: "/treatments/plastic-surgery/tummy-tuck"
      },
      {
        name: "Brazilian Butt Lift",
        description: "Enhance your curves naturally using your own fat",
        price: "From $4,000",
        link: "/treatments/plastic-surgery/brazilian-butt-lift"
      }
    ]
  },
  {
    title: "Breast Procedures",
    procedures: [
      {
        name: "Breast Lift",
        description: "Restore youthful breast position and shape",
        price: "From $4,000",
        link: "/treatments/plastic-surgery/breast-lift"
      },
      {
        name: "Breast Reduction",
        description: "Find relief and achieve balanced proportions",
        price: "From $4,500",
        link: "/treatments/plastic-surgery/breast-reduction"
      }
    ]
  }
]

export default function PlasticSurgeryPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-playfair text-4xl md:text-6xl mb-6">
              Plastic Surgery in Medellín
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Transform your appearance with our expert plastic surgeons at a fraction 
              of US costs. Premium care, luxury recovery, and natural-looking results.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>Premium Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Board-Certified Surgeons</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              <span className="flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {procedures.map((category) => (
              <div key={category.title} className="mb-16">
                <h2 className="text-3xl font-playfair mb-8">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.procedures.map((procedure) => (
                    <Link 
                      key={procedure.name} 
                      href={procedure.link}
                      className="block group"
                    >
                      <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/90">
                          {procedure.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{procedure.description}</p>
                        <p className="text-lg font-semibold text-primary">{procedure.price}</p>
                        <div className="mt-4 flex items-center text-primary font-medium">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-playfair mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a virtual consultation with our expert surgeons to discuss your goals
            and create your personalized treatment plan.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center gap-2">
              Book Virtual Consultation
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>
    </div>
  )
} 