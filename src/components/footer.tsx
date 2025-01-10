"use client"

import * as React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">MediCol</h3>
            <p className="text-gray-600">
              Premium medical experiences in Medellín, Colombia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Treatments</h4>
            <ul className="space-y-2">
              <li><Link href="/treatments/plastic-surgery" className="text-gray-600 hover:text-primary">Plastic Surgery</Link></li>
              <li><Link href="/treatments/stem-cell" className="text-gray-600 hover:text-primary">Stem Cell Therapy</Link></li>
              <li><Link href="/treatments/dental" className="text-gray-600 hover:text-primary">Dental Procedures</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} MediCol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 