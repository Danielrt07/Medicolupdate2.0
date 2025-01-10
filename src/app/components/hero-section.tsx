import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury-clinic.jpg"
          alt="Luxury Medical Facility"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">
            Premium Medical Care in Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            World-class plastic surgery and stem cell treatments in Medellín, Colombia. 
            5-star experience at up to 70% less than US prices.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="default" className="text-lg">
              Explore Treatments
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Price Comparison
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 