"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Plastic Surgery",
      description: "Transform with confidence through our comprehensive range of aesthetic procedures",
      image: "/images/plastic-surgery.jpg",
      link: "/treatments/plastic-surgery",
      procedures: ["Face Lift", "Rhinoplasty", "Body Contouring"]
    },
    {
      title: "Stem Cell Therapy",
      description: "Advanced regenerative treatments for optimal health and recovery",
      image: "/images/stem-cell.jpg",
      link: "/treatments/stem-cell",
      procedures: ["Joint Regeneration", "Anti-Aging", "Immune Support"]
    },
    {
      title: "Dental Procedures",
      description: "Achieve your perfect smile with cutting-edge dental treatments",
      image: "/images/dental.jpg",
      link: "/treatments/dental",
      procedures: ["Full Mouth Restoration", "Dental Implants", "Cosmetic Dentistry"]
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <h2 className="font-playfair text-3xl md:text-4xl mb-4 md:mb-6">
          World-Class Medical Procedures
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Experience premium healthcare with our comprehensive range of medical procedures, 
          all performed by internationally acclaimed specialists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {services.map((service) => (
          <Link 
            key={service.title} 
            href={service.link}
            className="group block h-full"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#60A5FA]/10 h-full">
              <div className="relative h-48 sm:h-56 lg:h-48 bg-gray-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4 md:mb-6">
                  {service.procedures.map((procedure) => (
                    <div 
                      key={procedure}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span className="truncate">{procedure}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-[#2563EB] font-medium group-hover:gap-2 transition-all text-sm md:text-base">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 