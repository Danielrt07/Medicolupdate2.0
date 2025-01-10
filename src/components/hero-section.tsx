"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/medellin.gif"
          alt="Medellin cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">
            Premium Medical Care in Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            World-class plastic surgery and stem cell treatments in Medellín, Colombia. 
            5-star experience at up to 70% less than Western prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/treatments" className="group">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Treatments
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
            <Link href="/patient-journey">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                How it Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 