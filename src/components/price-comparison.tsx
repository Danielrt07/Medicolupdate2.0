"use client"

import * as React from "react"

export function PriceComparison() {
  const procedures = [
    {
      name: "Breast Augmentation",
      usPrice: "8,000 - 12,000",
      ourPrice: "4,000 - 6,000",
      savings: "50%"
    },
    {
      name: "Stem Cell Therapy",
      usPrice: "15,000 - 30,000",
      ourPrice: "7,000 - 15,000",
      savings: "55%"
    },
    {
      name: "Dental Implants",
      usPrice: "3,000 - 4,500",
      ourPrice: "1,200 - 2,000",
      savings: "60%"
    }
  ]

  return (
    <section id="price-comparison" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-12">Compare and Save</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
} 