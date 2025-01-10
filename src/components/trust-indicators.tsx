"use client"

import * as React from "react"
import { Shield, Award, Star, Users } from "lucide-react"

export function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "Vetted Partners",
      description: "We partner with fully licensed and internationally certified medical professionals"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We work exclusively with JCI-accredited facilities and top-rated clinics"
    },
    {
      icon: Star,
      title: "Premium Service",
      description: "Concierge assistance, luxury accommodations, and end-to-end support"
    },
    {
      icon: Users,
      title: "1000+ Connections",
      description: "Successfully facilitated medical travel for patients from over 30 countries"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator) => (
            <div key={indicator.title} className="flex flex-col items-center text-center">
              <indicator.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">{indicator.title}</h3>
              <p className="text-gray-600">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 