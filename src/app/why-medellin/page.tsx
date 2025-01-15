import * as React from "react"
import { WhyMedellin } from "@/components/why-medellin"
import { Star, Award, Building2, Users, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Why Choose Medellín for Medical Tourism | MediCol",
  description: "Discover why Medellín is the perfect destination for your medical journey - world-class healthcare, modern facilities, and ideal recovery environment at affordable prices."
}

export default function WhyMedellinPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-r from-primary/90 to-primary">
          <div className="absolute inset-0 bg-[url('/images/medellin-cityscape.jpg')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
                Why Medellín?
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Experience world-class healthcare in the City of Eternal Spring, where modern medical 
                excellence meets the perfect environment for healing.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40-70%</div>
                <p className="text-gray-600">Cost Savings vs US</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">JCI Accredited Facilities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25k+</div>
                <p className="text-gray-600">Annual Medical Tourists</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <WhyMedellin />

        {/* Accreditations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
              International Accreditations & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">JCI Accreditation</h3>
                <p className="text-gray-600">
                  Our partner hospitals maintain Joint Commission International certification, 
                  the gold standard in global healthcare.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Modern Facilities</h3>
                <p className="text-gray-600">
                  State-of-the-art medical facilities equipped with the latest technology 
                  and following international protocols.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Expert Medical Teams</h3>
                <p className="text-gray-600">
                  Internationally trained medical professionals with extensive experience 
                  in treating international patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
              Patient Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;The quality of care I received in Medellín was exceptional. The doctors were highly skilled,
                  and the support staff made me feel at home throughout my recovery.&rdquo;
                </p>
                <div className="font-medium">Sarah M.</div>
                <div className="text-sm text-gray-500">from United States</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Not only did I save significantly on my procedure, but the entire experience exceeded
                  my expectations. The city&apos;s perfect climate made recovery so much easier.&rdquo;
                </p>
                <div className="font-medium">Michael R.</div>
                <div className="text-sm text-gray-500">from Canada</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;The medical facilities in Medellín are world-class. I was impressed by the technology
                  and the personalized attention I received throughout my stay.&rdquo;
                </p>
                <div className="font-medium">Emma L.</div>
                <div className="text-sm text-gray-500">from United Kingdom</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
              Your Journey to Better Health
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold mb-2">Initial Consultation</h3>
                <p className="text-gray-600">Free evaluation of your medical needs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold mb-2">Treatment Plan</h3>
                <p className="text-gray-600">Personalized care package creation</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold mb-2">Travel & Treatment</h3>
                <p className="text-gray-600">Coordinated travel and medical care</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold mb-2">Recovery & Follow-up</h3>
                <p className="text-gray-600">Comprehensive aftercare support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Ready to Start Your Medical Journey?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services and how we can help you 
              achieve your healthcare goals in Medellín.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="/treatments"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary border-2 border-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                View Treatments
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 