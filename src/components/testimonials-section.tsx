"use client"

import * as React from "react"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "United States",
      image: "/images/patient-placeholder.svg",
      procedure: "Facial Rejuvenation",
      quote: "The level of care and attention I received was exceptional. From the initial consultation to post-operative care, every detail was handled with utmost professionalism.",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Canada",
      image: "/images/patient-placeholder.svg",
      procedure: "Stem Cell Therapy",
      quote: "Not only did I save significantly on costs, but the medical facilities and staff expertise in Medellín exceeded my expectations. A truly premium experience.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "United Kingdom",
      image: "/images/patient-placeholder.svg",
      procedure: "Dental Reconstruction",
      quote: "The combination of world-class medical care and the beautiful healing environment of Medellín made my recovery smooth and comfortable.",
      rating: 5
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-playfair text-3xl md:text-4xl mb-6">
          Patient Success Stories
        </h2>
        <p className="text-gray-600 text-lg">
          Discover why patients from around the world choose Medellín for their medical procedures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.name}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all relative border border-[#60A5FA]/10"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#60A5FA]/20" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
              </div>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-[#2563EB] mt-1">{testimonial.procedure}</div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#FBBF24] fill-current" />
              ))}
            </div>

            <blockquote className="text-gray-600">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>

      {/* Trust Stats */}
      <div className="mt-16 pt-16 border-t grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-[#2563EB] mb-2">2,500+</div>
          <div className="text-gray-600">Successful Procedures</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#2563EB] mb-2">30+</div>
          <div className="text-gray-600">Countries Served</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#2563EB] mb-2">98%</div>
          <div className="text-gray-600">Patient Satisfaction</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#2563EB] mb-2">15+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </div>
    </div>
  )
} 