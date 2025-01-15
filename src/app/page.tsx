import { Button } from "@/components/ui/button"
import { PriceComparison } from "@/components/price-comparison"
import { TrustIndicators } from "@/components/trust-indicators"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyMedellin } from "@/components/why-medellin"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <TrustIndicators />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <WhyMedellin />
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <ServicesSection />
      </section>

      {/* Price Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <PriceComparison />
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <TestimonialsSection />
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#2563EB]" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#60A5FA]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4 md:mb-6">
              Begin Your Medical Journey Today
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-10">
              Experience world-class medical care in Medellín with personalized service 
              and premium accommodations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="w-full sm:w-auto text-base font-medium px-8 py-6 bg-white text-[#2563EB] hover:bg-white/90 rounded-lg transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base font-medium px-8 py-6 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10">
              {[
                { label: "Success Rate", value: "98%" },
                { label: "Cost Savings", value: "40-70%" },
                { label: "Years Experience", value: "15+" },
                { label: "Patient Support", value: "24/7" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 