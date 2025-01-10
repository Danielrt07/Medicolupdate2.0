"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Plane, 
  VideoIcon, 
  ClipboardCheck, 
  Building2, 
  Stethoscope,
  Car,
  Hotel,
  HeartPulse,
  Globe,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function PatientJourneyPage() {
  const [activeSection, setActiveSection] = React.useState("timeline")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -100 // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const timelineSteps = [
    {
      icon: VideoIcon,
      title: "Initial Consultation",
      description: "Free virtual consultation with our medical experts to discuss your goals",
      duration: "45-60 minutes",
      details: [
        "Review medical history",
        "Discuss desired outcomes",
        "Treatment recommendations",
        "Cost and timeline overview",
        "Q&A session"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Treatment Planning",
      description: "Detailed treatment plan and travel arrangements",
      duration: "1-2 weeks",
      details: [
        "Customized treatment plan",
        "Pre-procedure requirements",
        "Travel dates confirmation",
        "Accommodation selection",
        "Payment arrangements"
      ]
    },
    {
      icon: Plane,
      title: "Travel to Medellín",
      description: "Comfortable journey with our support every step of the way",
      duration: "Travel day",
      details: [
        "Flight assistance",
        "VIP airport pickup",
        "Direct transfer to accommodation",
        "Welcome package",
        "Local orientation"
      ]
    },
    {
      icon: Building2,
      title: "Clinic Visit & Tests",
      description: "In-person consultation and pre-procedure tests",
      duration: "1-2 days",
      details: [
        "Meet your medical team",
        "Physical examination",
        "Required medical tests",
        "Final treatment confirmation",
        "Pre-procedure instructions"
      ]
    },
    {
      icon: Stethoscope,
      title: "Procedure Day",
      description: "Your transformation begins with expert care",
      duration: "Procedure specific",
      details: [
        "Morning check-in",
        "Pre-operative preparation",
        "Procedure execution",
        "Recovery monitoring",
        "Overnight care if required"
      ]
    },
    {
      icon: HeartPulse,
      title: "Recovery & Aftercare",
      description: "Comfortable recovery with 24/7 medical support",
      duration: "Varies by procedure",
      details: [
        "Daily check-ups",
        "Medication management",
        "Recovery activities",
        "Progress monitoring",
        "Wellness services"
      ]
    },
    {
      icon: Globe,
      title: "Return Home",
      description: "Safe journey home with ongoing support",
      duration: "Travel day",
      details: [
        "Final check-up",
        "Travel clearance",
        "Aftercare instructions",
        "Airport transfer",
        "Follow-up schedule"
      ]
    },
    {
      icon: CheckCircle2,
      title: "Follow-up Care",
      description: "Continued support for optimal results",
      duration: "Ongoing",
      details: [
        "Virtual check-ups",
        "Progress tracking",
        "24/7 support access",
        "Recovery guidance",
        "Result documentation"
      ]
    }
  ]

  return (
    <div className="pt-24">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            <button
              onClick={() => scrollToSection("timeline")}
              className={`text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                activeSection === "timeline" 
                  ? "bg-primary text-white" 
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Journey Timeline
            </button>
            <button
              onClick={() => scrollToSection("travel")}
              className={`text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                activeSection === "travel" 
                  ? "bg-primary text-white" 
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Travel & Stay
            </button>
            <button
              onClick={() => scrollToSection("care")}
              className={`text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                activeSection === "care" 
                  ? "bg-primary text-white" 
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Care Instructions
            </button>
            <Button 
              variant="default"
              size="sm"
              className="ml-4"
              onClick={() => scrollToSection("cta")}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">
            Your Journey to Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            A seamless experience from your first consultation to your final follow-up. 
            We're with you every step of the way.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {timelineSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector Line */}
                {index !== timelineSteps.length - 1 && (
                  <div className="absolute left-[27px] top-[60px] bottom-0 w-[2px] bg-primary/20" />
                )}
                
                {/* Step Content */}
                <div className="flex gap-6 mb-12">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Travel & Stay</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Travel Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Flight booking assistance</li>
                <li>• Visa guidance if needed</li>
                <li>• Airport VIP service</li>
                <li>• Private transportation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Luxury Accommodation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5-star recovery facilities</li>
                <li>• 24/7 medical support</li>
                <li>• Concierge service</li>
                <li>• Wellness amenities</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Transportation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dedicated private driver</li>
                <li>• All medical appointments</li>
                <li>• Shopping & activities</li>
                <li>• On-call service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre/Post Care */}
      <section id="care" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12 text-center">Care Instructions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Pre-Procedure Care</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-medium mb-1">Medical Evaluation</p>
                    <p className="text-gray-600">Complete required tests and provide medical history</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-medium mb-1">Lifestyle Adjustments</p>
                    <p className="text-gray-600">Follow dietary and medication guidelines</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-medium mb-1">Travel Preparation</p>
                    <p className="text-gray-600">Arrange comfortable clothing and necessary items</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <p className="font-medium mb-1">Mental Preparation</p>
                    <p className="text-gray-600">Review procedure details and set realistic expectations</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Post-Procedure Care</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-medium mb-1">Recovery Protocol</p>
                    <p className="text-gray-600">Follow detailed recovery guidelines and medication schedule</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-medium mb-1">Activity Levels</p>
                    <p className="text-gray-600">Gradually increase activities as recommended</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-medium mb-1">Follow-up Care</p>
                    <p className="text-gray-600">Attend all scheduled check-ups and virtual consultations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <p className="font-medium mb-1">Long-term Results</p>
                    <p className="text-gray-600">Maintain results with recommended lifestyle changes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation and let us guide you through your 
            transformation journey.
          </p>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 