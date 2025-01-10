"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">
            Premium Medical Care in Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            World-class plastic surgery and stem cell treatments in Medellín, Colombia. 
            5-star experience at up to 70% less than Western prices.
          </p>
          <div className="flex gap-4">
            <Link href="/treatments/plastic-surgery">
              <Button size="lg" variant="default" className="text-lg">
                Explore Treatments
              </Button>
            </Link>
            <Link href="#price-comparison">
              <Button size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white/10">
                View Price Comparison
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 