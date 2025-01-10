import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Star } from "lucide-react"

export const metadata = {
  title: "Blepharoplasty in Medellín | MediCol",
  description: "Expert eyelid surgery in Medellín. Rejuvenate your eyes with our skilled surgeons at significant cost savings."
}

export default function BlepharoplastyPage() {
  const benefits = [
    {
      title: "Refreshed Look",
      description: "Remove excess skin and fat for a more alert and youthful appearance"
    },
    {
      title: "Improved Vision",
      description: "Can help correct vision problems caused by drooping upper eyelids"
    },
    {
      title: "Quick Recovery",
      description: "Return to most activities within 7-10 days"
    },
    {
      title: "Natural Results",
      description: "Subtle enhancement that maintains your natural eye shape"
    }
  ]

  const recoverySteps = [
    {
      title: "Days 1-3",
      description: "Initial recovery with cold compresses, minimal discomfort"
    },
    {
      title: "Days 4-7",
      description: "Most swelling subsides, stitches removed"
    },
    {
      title: "Days 7-14",
      description: "Return to work and light activities"
    },
    {
      title: "1-2 Months",
      description: "Final results visible as all swelling resolves"
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
              Eyelid Surgery in Medellín
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Rejuvenate your eyes and restore a more youthful, alert appearance with 
              our expert surgeons at a fraction of US costs.
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
                <span>7-10 Day Recovery</span>
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
              Our blepharoplasty procedures address both cosmetic and functional concerns 
              of the upper and lower eyelids. Using precise microsurgical techniques, 
              we remove excess skin and fat while preserving your natural eye shape for 
              a refreshed, more youthful appearance.
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
                  <p className="text-3xl font-bold text-gray-900">$4,000 - $8,000</p>
                </div>
                <div className="text-4xl font-bold text-primary">vs</div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Our Price</p>
                  <p className="text-3xl font-bold text-primary">$3,000</p>
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