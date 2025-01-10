"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "Plastic Surgery",
      description: "Transform with confidence through our comprehensive range of aesthetic procedures",
      image: "/images/plastic-surgery.jpg",
      link: "/treatments/plastic-surgery"
    },
    {
      title: "Stem Cell Therapy",
      description: "Advanced regenerative treatments for optimal health and recovery",
      image: "/images/stem-cell.jpg",
      link: "/treatments/stem-cell"
    },
    {
      title: "Dental Procedures",
      description: "Achieve your perfect smile with our state-of-the-art dental treatments",
      image: "/images/dental.jpg",
      link: "/treatments/dental"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <Button variant="outline" className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 