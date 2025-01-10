"use client"

import * as React from "react"
import { Plane, Building2, Heart, Coins, Sun, Mountain, GraduationCap, Clock } from "lucide-react"
import Image from "next/image"

export function WhyMedellin() {
  const mainReasons = [
    {
      icon: Building2,
      title: "Modern Healthcare Hub",
      description: "Home to Latin America's most advanced medical facilities and internationally renowned specialists"
    },
    {
      icon: Coins,
      title: "Cost-Effective Excellence",
      description: "Premium healthcare services at 40-70% lower costs than the US and Canada"
    }
  ]

  const additionalBenefits = [
    {
      icon: Sun,
      title: "Perfect Climate",
      description: "Year-round spring-like weather (68-76°F)"
    },
    {
      icon: Plane,
      title: "Easy Access",
      description: "Direct flights from major US cities"
    },
    {
      icon: GraduationCap,
      title: "Expert Care",
      description: "US/Europe trained medical staff"
    },
    {
      icon: Mountain,
      title: "Beautiful Setting",
      description: "Stunning mountain views and modern city"
    },
    {
      icon: Heart,
      title: "Warm Hospitality",
      description: "Known for exceptional patient care"
    },
    {
      icon: Clock,
      title: "Quick Recovery",
      description: "Ideal climate for healing"
    }
  ]

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 md:mb-4">Why Choose Medellín?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg px-4">
            Experience world-class healthcare in the City of Eternal Spring, where modern medical excellence 
            meets the perfect environment for healing and recovery.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-16">
          {mainReasons.map((reason) => (
            <div key={reason.title} className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="bg-primary/10 p-4 rounded-lg self-start">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {additionalBenefits.map((benefit) => (
            <div key={benefit.title} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 