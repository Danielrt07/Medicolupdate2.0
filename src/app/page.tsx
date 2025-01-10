import { Button } from "@/components/ui/button"
import { PriceComparison } from "@/components/price-comparison"
import { TrustIndicators } from "@/components/trust-indicators"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyMedellin } from "@/components/why-medellin"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustIndicators />
      <WhyMedellin />
      <ServicesSection />
      <PriceComparison />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto text-center text-white">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            Begin Your Premium Medical Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience world-class medical care in Medellín with personalized service and luxury accommodations
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </div>
  )
} 