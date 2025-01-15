"use client"

import * as React from "react"
import { Building2, Heart, Coins, Sun, Mountain, GraduationCap, Clock, CheckCircle } from "lucide-react"

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
      description: "Year-round spring-like weather (68-76°F)",
      highlight: "Ideal for Recovery"
    },
    {
      icon: Mountain,
      title: "Beautiful Setting",
      description: "Modern city nestled in the Andes mountains",
      highlight: "Tranquil Environment"
    },
    {
      icon: GraduationCap,
      title: "Expert Care",
      description: "US/Europe trained medical professionals",
      highlight: "World-Class Team"
    },
    {
      icon: Heart,
      title: "Premium Service",
      description: "Personalized care and luxury accommodations",
      highlight: "5-Star Experience"
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="font-playfair text-3xl md:text-4xl mb-4 md:mb-6">
          Why Choose Medellín?
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Experience world-class healthcare in the City of Eternal Spring, where modern medical 
          excellence meets the perfect environment for healing and recovery.
        </p>
      </div>

      {/* Main Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
        {mainReasons.map((reason) => (
          <div 
            key={reason.title} 
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#60A5FA]/10 group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="bg-[#2563EB]/5 p-4 rounded-xl group-hover:bg-[#2563EB]/10 transition-colors">
                <reason.icon className="w-8 h-8 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-base md:text-lg">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {additionalBenefits.map((benefit) => (
          <div 
            key={benefit.title} 
            className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#60A5FA]/10 group"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#2563EB]/5 p-3 rounded-lg group-hover:bg-[#2563EB]/10 transition-colors">
                <benefit.icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                <div className="flex items-center gap-1.5 text-[#2563EB]">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{benefit.highlight}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 