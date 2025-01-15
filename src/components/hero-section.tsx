"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Star, CheckCircle, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center bg-gradient-to-br from-[#60A5FA]/10 via-white to-[#60A5FA]/10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      {/* Floating Image Grid */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] hidden lg:block">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="space-y-4">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <Image
                src="/images/hero/clinic-1.jpg"
                alt="Modern Medical Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <Image
                src="/images/hero/doctor-1.jpg"
                alt="Expert Medical Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <Image
                src="/images/hero/procedure-1.jpg"
                alt="Advanced Medical Procedures"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <Image
                src="/images/hero/medellin-1.jpg"
                alt="Beautiful Medellín"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/5 py-2 px-4 rounded-full">
              <Star className="w-4 h-4 shrink-0 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#2563EB] whitespace-nowrap">
                Trusted by 15,000+ International Patients Every Year
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-50 py-2 px-4 rounded-full">
              <Phone className="w-4 h-4 shrink-0 text-green-600" />
              <span className="text-sm font-medium text-green-600 whitespace-nowrap">
                24/7 Patient Support Available
              </span>
            </div>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gray-900">
            Premium Medical Care<br className="hidden sm:block" />
            <span className="text-[#2563EB] inline-block mt-2">in the City of Eternal Spring</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl">
            Experience world-class medical procedures with 5-star service 
            at 40-70% lower costs than the US and Canada.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-12 max-w-2xl">
            {[
              "JCI Accredited Medical Facilities",
              "US & European Trained Doctors",
              "All-Inclusive Premium Care",
              "Personalized Travel Support"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-2 bg-white/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl">
            <Link href="/treatments" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full text-base font-medium px-6 sm:px-8 py-5 sm:py-6 bg-[#2563EB] hover:bg-[#2563EB]/90 rounded-lg transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Treatments
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
            <Link href="/patient-journey" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full text-base font-medium px-6 sm:px-8 py-5 sm:py-6 border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 rounded-lg transition-colors"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t max-w-2xl">
            {[
              { value: "40-70%", label: "Cost Savings" },
              { value: "15+", label: "Partner Clinics" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Patient Support" }
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-white/50 rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#2563EB] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 