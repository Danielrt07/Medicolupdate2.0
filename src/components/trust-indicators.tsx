"use client"

import * as React from "react"
import { Shield, Award, Star, Globe } from "lucide-react"

export function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "International Standards",
      description: "JCI-accredited facilities meeting the highest global healthcare standards",
      stat: "100%",
      statLabel: "Certified Partners"
    },
    {
      icon: Award,
      title: "Medical Excellence",
      description: "Internationally trained specialists with proven track records",
      stat: "15+",
      statLabel: "Years Experience"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving patients from over 30 countries with multilingual support",
      stat: "30+",
      statLabel: "Countries Served"
    },
    {
      icon: Star,
      title: "Patient Satisfaction",
      description: "Consistently high ratings from our international patients",
      stat: "98%",
      statLabel: "Success Rate"
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {indicators.map((indicator) => (
          <div 
            key={indicator.title} 
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#60A5FA]/10"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#2563EB]/5 p-2 md:p-3 rounded-lg">
                <indicator.icon className="w-5 h-5 md:w-6 md:h-6 text-[#2563EB]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 truncate">
                  {indicator.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-2">
                  {indicator.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-bold text-[#2563EB]">{indicator.stat}</span>
                  <span className="text-sm text-gray-600 truncate">{indicator.statLabel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 