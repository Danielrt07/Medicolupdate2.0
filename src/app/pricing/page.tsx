import * as React from "react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Pricing Comparison | MediCol",
  description: "Compare medical procedure costs between Colombia and other countries. Save 40-70% while receiving world-class care in Medellín."
}

export default function PricingPage() {
  const procedures = {
    plastic: [
      {
        name: "Early-Intervention Facelift",
        colombia: "12,000",
        us: "35,000",
        uk: "28,000",
        canada: "30,000",
        savings: "65%"
      },
      {
        name: "Breast Augmentation",
        colombia: "5,000",
        us: "12,000",
        uk: "10,000",
        canada: "11,000",
        savings: "58%"
      },
      {
        name: "Rhinoplasty",
        colombia: "6,500",
        us: "15,000",
        uk: "12,000",
        canada: "13,000",
        savings: "57%"
      },
      {
        name: "Brazilian Butt Lift",
        colombia: "7,000",
        us: "16,000",
        uk: "13,000",
        canada: "14,500",
        savings: "56%"
      }
    ],
    stemCell: [
      {
        name: "Joint Regeneration",
        colombia: "8,000",
        us: "25,000",
        uk: "20,000",
        canada: "22,000",
        savings: "68%"
      },
      {
        name: "Anti-Aging Treatment",
        colombia: "12,000",
        us: "35,000",
        uk: "30,000",
        canada: "32,000",
        savings: "66%"
      },
      {
        name: "Hair Restoration",
        colombia: "6,500",
        us: "18,000",
        uk: "15,000",
        canada: "16,000",
        savings: "64%"
      }
    ],
    dental: [
      {
        name: "All-on-4 Implants",
        colombia: "12,000",
        us: "28,000",
        uk: "25,000",
        canada: "26,000",
        savings: "57%"
      },
      {
        name: "Veneers (per tooth)",
        colombia: "600",
        us: "2,000",
        uk: "1,500",
        canada: "1,800",
        savings: "70%"
      },
      {
        name: "Full Mouth Reconstruction",
        colombia: "15,000",
        us: "45,000",
        uk: "40,000",
        canada: "42,000",
        savings: "67%"
      }
    ]
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            2025 Global Price Comparison
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Experience premium medical care in Colombia at a fraction of US/EU prices. 
            Save 40-70% while receiving treatment in JCI-accredited facilities.
          </p>
        </div>
      </section>

      {/* Plastic Surgery Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">Plastic Surgery Procedures</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border">Procedure</th>
                  <th className="text-left p-4 border">Colombia (USD)</th>
                  <th className="text-left p-4 border">United States</th>
                  <th className="text-left p-4 border">United Kingdom</th>
                  <th className="text-left p-4 border">Canada</th>
                  <th className="text-left p-4 border">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {procedures.plastic.map((proc) => (
                  <tr key={proc.name} className="hover:bg-gray-50">
                    <td className="p-4 border font-medium">{proc.name}</td>
                    <td className="p-4 border text-primary font-bold">${proc.colombia}</td>
                    <td className="p-4 border">${proc.us}</td>
                    <td className="p-4 border">${proc.uk}</td>
                    <td className="p-4 border">${proc.canada}</td>
                    <td className="p-4 border text-green-600 font-bold">Up to {proc.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stem Cell Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">Stem Cell Treatments</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border">Treatment</th>
                  <th className="text-left p-4 border">Colombia (USD)</th>
                  <th className="text-left p-4 border">United States</th>
                  <th className="text-left p-4 border">United Kingdom</th>
                  <th className="text-left p-4 border">Canada</th>
                  <th className="text-left p-4 border">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {procedures.stemCell.map((proc) => (
                  <tr key={proc.name} className="hover:bg-gray-50">
                    <td className="p-4 border font-medium">{proc.name}</td>
                    <td className="p-4 border text-primary font-bold">${proc.colombia}</td>
                    <td className="p-4 border">${proc.us}</td>
                    <td className="p-4 border">${proc.uk}</td>
                    <td className="p-4 border">${proc.canada}</td>
                    <td className="p-4 border text-green-600 font-bold">Up to {proc.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dental Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">Dental Procedures</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border">Procedure</th>
                  <th className="text-left p-4 border">Colombia (USD)</th>
                  <th className="text-left p-4 border">United States</th>
                  <th className="text-left p-4 border">United Kingdom</th>
                  <th className="text-left p-4 border">Canada</th>
                  <th className="text-left p-4 border">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {procedures.dental.map((proc) => (
                  <tr key={proc.name} className="hover:bg-gray-50">
                    <td className="p-4 border font-medium">{proc.name}</td>
                    <td className="p-4 border text-primary font-bold">${proc.colombia}</td>
                    <td className="p-4 border">${proc.us}</td>
                    <td className="p-4 border">${proc.uk}</td>
                    <td className="p-4 border">${proc.canada}</td>
                    <td className="p-4 border text-green-600 font-bold">Up to {proc.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Why Our Prices Are Lower</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lower Operating Costs</h3>
              <p className="text-gray-600">
                Colombia's lower cost of living and operational expenses allow us to offer 
                premium care at significantly reduced prices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">No Middlemen</h3>
              <p className="text-gray-600">
                Direct relationships with top medical facilities and doctors eliminate 
                unnecessary administrative costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Government Support</h3>
              <p className="text-gray-600">
                Colombia's investment in medical tourism infrastructure helps maintain 
                competitive pricing while ensuring high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">All-Inclusive Packages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pre-operative consultations</li>
                <li>• All medical fees and facility costs</li>
                <li>• Post-operative care and medications</li>
                <li>• Luxury recovery accommodation</li>
                <li>• Private transportation</li>
                <li>• Personal medical concierge</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Additional Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Virtual consultations</li>
                <li>• Travel arrangement assistance</li>
                <li>• Translation services</li>
                <li>• Tourism activities planning</li>
                <li>• 24/7 support</li>
                <li>• Recovery massage therapy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-6">Ready to Save?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a detailed price quote for your procedure and learn about our flexible payment options.
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Request Price Quote
          </Button>
        </div>
      </section>
    </div>
  )
} 