"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl font-bold">
          MediCol
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/treatments" className="hover:text-primary">
            Treatments
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline">Book Consultation</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 