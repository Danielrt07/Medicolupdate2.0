import * as React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Why Medellín is Becoming the Medical Tourism Capital | MediCol",
  description: "Discover why Medellín is emerging as Latin America&apos;s premier medical tourism destination, offering world-class healthcare at affordable prices."
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
                <span>February 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
                <span>•</span>
                <span className="text-primary font-medium">Medical Tourism</span>
              </div>
              <h1 className="font-playfair text-4xl md:text-5xl mb-6">
                Why Medellín is Becoming the Medical Tourism Capital of Latin America
              </h1>
            </header>

            <div className="prose prose-lg prose-primary max-w-none">
              <p>
                In recent years, Medellín has emerged as a leading destination for medical tourism,
                attracting patients from around the world seeking high-quality healthcare at
                competitive prices. This transformation from a city once known for its troubled past
                to a medical tourism hub is no accident &ndash; it&apos;s the result of strategic investment
                in healthcare infrastructure, a commitment to international standards, and the city&apos;s
                natural advantages.
              </p>

              <h2>World-Class Medical Facilities</h2>
              <p>
                Medellín boasts some of Latin America&apos;s most advanced medical facilities, with
                hospitals and clinics that rival those in the United States and Europe. Many of
                these institutions have earned prestigious international accreditations, including
                JCI (Joint Commission International) certification, demonstrating their commitment
                to maintaining the highest standards of patient care and safety.
              </p>

              <h2>Significant Cost Savings</h2>
              <p>
                One of the most compelling reasons to choose Medellín for medical procedures is the
                significant cost savings. Patients can expect to save 40-70% compared to &ldquo;standard&rdquo;
                U.S. prices, without compromising on quality. This isn&apos;t about cutting corners &ndash;
                it&apos;s about leveraging the lower cost of living and operational expenses in Colombia.
              </p>

              <h2>Internationally Trained Medical Professionals</h2>
              <p>
                Medellín&apos;s healthcare providers include many physicians and specialists who
                have trained in the United States, Europe, and other leading medical centers
                worldwide. These professionals bring back cutting-edge techniques and
                technologies, ensuring patients receive care that meets international standards.
              </p>

              <h2>Perfect Recovery Environment</h2>
              <p>
                Known as the &ldquo;City of Eternal Spring,&rdquo; Medellín&apos;s year-round mild climate
                (averaging 68-76°F) creates an ideal environment for post-operative recovery.
                The city&apos;s modern infrastructure, combined with its natural beauty and
                welcoming culture, provides a comfortable and stress-free healing environment.
              </p>

              <h2>Easy Accessibility</h2>
              <p>
                With direct flights from major U.S. cities and a modern international airport,
                Medellín is easily accessible for international patients. The city&apos;s efficient
                transportation system and abundance of high-quality accommodations make it
                convenient for patients and their companions during their medical journey.
              </p>

              <h2>Comprehensive Care Packages</h2>
              <p>
                Medical tourism facilitators in Medellín offer comprehensive care packages that
                include not just medical procedures, but also transportation, accommodation,
                translation services, and post-operative care. This integrated approach ensures
                a smooth and worry-free experience for international patients.
              </p>

              <h2>Looking Ahead</h2>
              <p>
                As Medellín continues to invest in its healthcare infrastructure and build its
                reputation for medical excellence, its position as Latin America&apos;s medical
                tourism capital is only expected to strengthen. With its combination of
                high-quality care, cost savings, and ideal recovery environment, Medellín
                offers a compelling proposition for patients seeking medical care abroad.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 