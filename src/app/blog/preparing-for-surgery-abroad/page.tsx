import * as React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Complete Guide: Preparing for Surgery Abroad | MediCol",
  description: "Essential tips and comprehensive checklist for planning your medical journey abroad, from choosing the right surgeon to recovery planning."
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/90 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <span>February 10, 2024</span>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span className="text-primary font-medium">Patient Guide</span>
              </div>
              <h1 className="font-playfair text-4xl md:text-5xl mb-6">
                Complete Guide: Preparing for Surgery Abroad
              </h1>
            </header>

            <div className="prose prose-lg prose-primary max-w-none">
              <p>
                Planning for surgery abroad requires careful preparation and attention to detail.
                While this process might seem overwhelming, MediCol is here to guide you through
                every step. Our comprehensive concierge service ensures your medical journey is
                smooth and worry-free, from initial consultation to post-operative care.
              </p>

              <h2>1. Research and Planning (3-6 Months Before)</h2>
              <p>
                Our team handles the complex groundwork for you:
              </p>
              <ul>
                <li>We&apos;ve already vetted the best medical facilities in Medellín</li>
                <li>All our partner surgeons are internationally certified with verified credentials</li>
                <li>We provide direct access to authentic patient testimonials and reviews</li>
                <li>You&apos;ll receive transparent, detailed cost breakdowns with no hidden fees</li>
                <li>Our visa specialists assist with all travel documentation</li>
                <li>We help arrange comprehensive travel insurance coverage</li>
              </ul>

              <h2>2. Medical Preparation (2-3 Months Before)</h2>
              <p>
                We coordinate all medical preparations:
              </p>
              <ul>
                <li>We arrange all necessary pre-operative evaluations locally</li>
                <li>Our team handles medical record collection and translation</li>
                <li>We facilitate communication between your local physician and our medical team</li>
                <li>You&apos;ll receive a personalized pre-surgery health optimization plan</li>
              </ul>

              <h2>3. Travel Arrangements (1-2 Months Before)</h2>
              <p>
                Let us handle all your travel logistics:
              </p>
              <ul>
                <li>We book your flights and luxury accommodation</li>
                <li>Your schedule is optimized for pre-operative consultations</li>
                <li>We arrange flexible travel dates to accommodate your recovery</li>
                <li>Companion accommodations and support are included</li>
              </ul>

              <h2>4. Communication Planning</h2>
              <p>
                We ensure seamless communication through:
              </p>
              <ul>
                <li>Your dedicated patient coordinator available 24/7</li>
                <li>Direct access to your medical team when needed</li>
                <li>Regular updates to your emergency contacts</li>
                <li>Assistance with insurance documentation and claims</li>
              </ul>

              <h2>5. Financial Planning</h2>
              <p>
                We make the financial process transparent and straightforward:
              </p>
              <ul>
                <li>Clear, all-inclusive pricing with no surprises</li>
                <li>All major expenses covered in your package</li>
                <li>Flexible payment options available</li>
                <li>Assistance with international banking arrangements</li>
              </ul>

              <h2>6. Pre-Surgery Preparation</h2>
              <p>
                Your arrival and preparation are fully supported:
              </p>
              <ul>
                <li>Personalized pre-surgery guidelines and support</li>
                <li>Comprehensive packing list provided</li>
                <li>All documentation prepared and organized</li>
                <li>Bilingual support staff available 24/7</li>
                <li>VIP transportation service throughout your stay</li>
              </ul>

              <h2>7. Recovery Planning</h2>
              <p>
                We ensure a comfortable recovery experience:
              </p>
              <ul>
                <li>Luxury recovery facilities with 24/7 medical support</li>
                <li>Curated recovery activities and wellness programs</li>
                <li>Coordination with your home healthcare providers</li>
                <li>Ongoing support even after you return home</li>
              </ul>

              <h2>Our Commitment</h2>
              <p>
                At MediCol, we understand that preparing for surgery abroad can feel daunting.
                That&apos;s why we&apos;ve developed a comprehensive concierge service that handles every
                detail of your medical journey. Our experienced team works tirelessly to ensure
                your experience is smooth, comfortable, and successful.
              </p>

              <h2>Conclusion</h2>
              <p>
                While medical tourism involves many moving parts, our role is to simplify the
                entire process for you. From your first consultation to your final follow-up,
                MediCol is with you every step of the way. Let us handle the complexities while
                you focus on your health and recovery. Contact us today to learn how we can help
                make your medical journey abroad a success.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 