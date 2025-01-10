import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Star } from "lucide-react"

export const metadata = {
  title: "Rhinoplasty in Medellín | MediCol",
  description: "Expert rhinoplasty surgery in Medellín with precision results. Enhance your facial harmony with our skilled surgeons at significant cost savings."
}

export default function RhinoplastyPage() {
  const benefits = [
    {
      title: "Enhanced Breathing",
      description: "Improve both the appearance and function of your nose for better breathing"
    },
    {
      title: "Custom Design",
      description: "Digital imaging helps visualize your results before surgery"
    },
    {
      title: "Minimal Scarring",
      description: "Advanced techniques ensure virtually invisible incision lines"
    },
    {
      title: "Permanent Results",
      description: "Enjoy lifelong improvements to your facial harmony"
    }
  ]

  const recoverySteps = [
    {
      title: "Week 1",
      description: "Initial recovery with splint removal, most swelling present"
    },
    {
      title: "Weeks 2-3",
      description: "Return to work, visible swelling reduces significantly"
    },
    {
      title: "Months 1-3",
      description: "Continue improvement, resume all normal activities"
    },
    {
      title: "6-12 Months",
      description: "Final refined results as subtle swelling completely resolves"
    }
  ]

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
              Rhinoplasty in Medellín
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Enhance your facial harmony with precision nose reshaping by our expert 
              surgeons at a fraction of US costs.
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
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>2-3 Week Recovery</span>
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

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair mb-6">About the Procedure</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our rhinoplasty procedures combine artistry with surgical precision to 
              enhance both the appearance and function of your nose. Using advanced 
              3D imaging technology, we can visualize your desired results before surgery, 
              ensuring your new nose complements your facial features perfectly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Recovery Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recoverySteps.map((step) => (
                <div key={step.title} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-6">Transparent Pricing</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">US Price Range</p>
                  <p className="text-3xl font-bold text-gray-900">$8,000 - $15,000</p>
                </div>
                <div className="text-4xl font-bold text-primary">vs</div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Our Price</p>
                  <p className="text-3xl font-bold text-primary">$4,500</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Price includes all medical fees, luxury recovery accommodation, 
                and comprehensive aftercare
              </p>
              <Button 
                size="lg"
                className="text-lg px-8 py-6"
              >
                <span className="flex items-center gap-2">
                  Get Detailed Quote
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
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