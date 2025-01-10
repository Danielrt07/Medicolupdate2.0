"use client"

import * as React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      image: "/images/testimonial-1.jpg",
      text: "The care and attention I received was exceptional. From the luxury accommodations to the skilled medical team, everything exceeded my expectations.",
      procedure: "Breast Augmentation"
    },
    {
      name: "Michael Chen",
      location: "Canada",
      image: "/images/testimonial-2.jpg",
      text: "The stem cell therapy results were amazing. The facilities are world-class and the staff made me feel comfortable throughout the entire process.",
      procedure: "Stem Cell Therapy"
    },
    {
      name: "Emma Thompson",
      location: "United Kingdom",
      image: "/images/testimonial-3.jpg",
      text: "I saved thousands on my dental work without compromising on quality. The clinic is beautiful and the results are perfect.",
      procedure: "Full Mouth Reconstruction"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-12">Patient Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="text-sm font-medium text-primary">{testimonial.procedure}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 