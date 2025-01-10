"use client"

import * as React from "react"
import Link from "next/link"

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
    <section id="price-comparison" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-12">Compare and Save</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {procedures.map((procedure) => (
            <div key={procedure.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{procedure.name}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">US Price Range</p>
                  <p className="text-lg font-bold">${procedure.usPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Our Price</p>
                  <p className="text-lg font-bold text-primary">${procedure.ourPrice}</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">Potential Savings</p>
                  <p className="text-lg font-bold text-green-600">Up to {procedure.savings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            href="/pricing" 
            className="inline-flex items-center text-primary hover:text-primary/90 font-semibold"
          >
            See Full 2025 Price Comparison 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 