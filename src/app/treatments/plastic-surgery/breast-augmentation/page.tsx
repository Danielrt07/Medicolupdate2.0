import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Star } from "lucide-react"

export const metadata = {
  title: "Breast Augmentation in Medellín | MediCol",
  description: "Premium breast augmentation surgery in Medellín with expert surgeons. Natural results, luxury recovery, and significant cost savings."
}

export default function BreastAugmentationPage() {
  const benefits = [
    {
      title: "Natural Look & Feel",
      description: "Latest implant technology and techniques for the most natural-looking results"
    },
    {
      title: "Multiple Options",
      description: "Choose from saline, silicone, or fat transfer based on your goals"
    },
    {
      title: "Quick Recovery",
      description: "Return to light activities within 1-2 weeks"
    },
    {
      title: "Long-Term Results",
      description: "Enjoy your results for many years with proper care"
    }
  ]

  const recoverySteps = [
    {
      title: "Days 1-3",
      description: "Initial recovery in our luxury facility with 24/7 medical support"
    },
    {
      title: "Week 1",
      description: "Return to light activities, minimal discomfort"
    },
    {
      title: "Weeks 2-4",
      description: "Resume most normal activities, continued improvement"
    },
    {
      title: "2-3 Months",
      description: "Final results visible as swelling completely resolves"
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
              Breast Augmentation in Medellín
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Achieve your desired look with our expert surgeons using the latest 
              techniques and technology at a fraction of US costs.
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
                <span>1-2 Week Recovery</span>
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
              Our breast augmentation procedures are tailored to your unique body type 
              and aesthetic goals. We offer various implant options and techniques, 
              including fat transfer, to achieve the most natural-looking results 
              while ensuring your comfort and safety throughout the process.
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
                  <p className="text-3xl font-bold text-gray-900">$8,000 - $12,000</p>
                </div>
                <div className="text-4xl font-bold text-primary">vs</div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Our Price</p>
                  <p className="text-3xl font-bold text-primary">$4,000</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Price includes all medical fees, implants, luxury recovery accommodation, 
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