import * as React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Recovery in the City of Eternal Spring | MediCol",
  description: "Learn about the unique advantages of recovering from surgery in Medellín&apos;s perfect climate and world-class facilities."
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
                <span>February 5, 2024</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span className="text-primary font-medium">Recovery</span>
              </div>
              <h1 className="font-playfair text-4xl md:text-5xl mb-6">
                Recovery in the City of Eternal Spring: What to Expect
              </h1>
            </header>

            <div className="prose prose-lg prose-primary max-w-none">
              <p>
                Recovering from surgery is a crucial phase of your medical journey, and the
                environment in which you recover can significantly impact your healing process.
                Medellín, known as the City of Eternal Spring, offers unique advantages that
                make it an ideal location for post-operative recovery.
              </p>

              <h2>Perfect Climate for Healing</h2>
              <p>
                Medellín&apos;s year-round spring-like climate, with temperatures consistently
                between 68-76°F (20-24°C), creates optimal conditions for healing. This
                moderate climate:
              </p>
              <ul>
                <li>Reduces swelling and inflammation</li>
                <li>Promotes better circulation</li>
                <li>Minimizes weather-related stress on the body</li>
                <li>Makes it comfortable to rest and move around as needed</li>
              </ul>

              <h2>Luxury Recovery Facilities</h2>
              <p>
                Our recovery facilities are designed to provide the perfect blend of
                comfort and medical support. Each facility features:
              </p>
              <ul>
                <li>24/7 nursing care and support</li>
                <li>Comfortable, private rooms with modern amenities</li>
                <li>Specialized medical equipment for recovery</li>
                <li>Nutritionist-designed meal plans</li>
                <li>On-call medical staff</li>
              </ul>

              <h2>Activities During Recovery</h2>
              <p>
                As you progress in your recovery, you can gradually enjoy appropriate
                activities such as:
              </p>
              <ul>
                <li>Gentle walks in nearby parks and gardens</li>
                <li>Light shopping in modern, air-conditioned malls</li>
                <li>Relaxing café visits</li>
                <li>Wellness spa treatments (when appropriate)</li>
                <li>Cultural activities suitable for your recovery stage</li>
              </ul>

              <h2>Transportation and Logistics</h2>
              <p>
                We ensure smooth logistics during your recovery with:
              </p>
              <ul>
                <li>Private transportation to all medical appointments</li>
                <li>Assistance with daily needs and errands</li>
                <li>Coordination of pharmacy visits and medication delivery</li>
                <li>Help with travel arrangements as needed</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Recovering in Medellín offers a unique combination of perfect climate,
                excellent medical care, and comprehensive support services. This
                environment, coupled with our dedicated team and facilities, creates
                ideal conditions for a smooth and comfortable recovery process. Our
                goal is to ensure that your healing journey is as pleasant and
                effective as possible, allowing you to return home fully recovered
                and satisfied with your medical tourism experience.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 