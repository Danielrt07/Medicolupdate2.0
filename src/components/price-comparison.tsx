"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PriceComparison() {
  const procedures = [
    {
      name: "Breast Augmentation",
      usPrice: "6,000 - 12,000",
      ourPrice: "3,500 - 5,500",
      savings: "55%"
    },
    {
      name: "Stem Cell Therapy",
      usPrice: "18,000 - 35,000",
      ourPrice: "8,000 - 16,000",
      savings: "60%"
    },
    {
      name: "Dental Implants (per tooth)",
      usPrice: "3,500 - 6,000",
      ourPrice: "1,400 - 2,200",
      savings: "65%"
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-4">
          Compare and Save
        </h2>
        <p className="text-gray-600 text-lg">
          Experience premium medical care at a fraction of US costs while maintaining the highest standards of quality and safety.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {procedures.map((procedure) => (
          <div 
            key={procedure.name} 
            className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#60A5FA]/10"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">{procedure.name}</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">US Price Range</p>
                <p className="text-2xl font-bold text-gray-900">${procedure.usPrice}</p>
              </div>
              
              <div className="bg-[#2563EB]/5 p-4 rounded-lg">
                <p className="text-sm text-[#2563EB] mb-1">Our Price</p>
                <p className="text-2xl font-bold text-[#2563EB]">${procedure.ourPrice}</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Your Savings</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">
                    Up to {procedure.savings}
                  </span>
                  <span className="text-sm text-green-600">saved</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/pricing" 
          className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#2563EB]/90 font-semibold group"
        >
          See Full 2025 Price Comparison 
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
} 