"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/favicon.svg" 
              alt="MediCol Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="font-playfair text-2xl font-bold">MediCol</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/treatments" className="hover:text-primary transition-colors">
              Treatments
            </Link>
            <Link href="/patient-journey" className="hover:text-primary transition-colors">
              Patient Journey
            </Link>
            <Link href="/why-medellin" className="hover:text-primary transition-colors">
              Why Medellín
            </Link>
            <Link href="/pricing" className="hover:text-primary transition-colors">
              Pricing Comparison
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Book Consultation
            </Button>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-16 right-0 w-full h-[calc(100vh-4rem)] bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
          <Link 
            href="/treatments" 
            className="text-lg py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Treatments
          </Link>
          <Link 
            href="/patient-journey" 
            className="text-lg py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Patient Journey
          </Link>
          <Link 
            href="/why-medellin" 
            className="text-lg py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Why Medellín
          </Link>
          <Link 
            href="/pricing" 
            className="text-lg py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Pricing Comparison
          </Link>
          <Link 
            href="/contact" 
            className="text-lg py-2 hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Button className="w-full mt-4">
            Book Consultation
          </Button>
        </div>
      </div>
    </>
  )
}

export default Navbar 