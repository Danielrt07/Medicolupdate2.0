"use client"

import * as React from "react"

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-playfair mb-8">Terms of Service</h1>
        <div className="prose max-w-4xl">
          <p className="text-gray-600 mb-8">Last updated: January 10, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to MediCol. By accessing or using our website and services, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p>
              MediCol operates solely as a medical tourism facilitator and intermediary. We connect patients with healthcare providers and facilitate travel arrangements. We do not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide medical services or treatments</li>
              <li>Hold any medical licenses</li>
              <li>Employ medical professionals</li>
              <li>Operate medical facilities</li>
              <li>Make medical decisions or provide medical advice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Medical Disclaimer</h2>
            <p className="font-semibold text-red-600 mb-4">
              IMPORTANT: MediCol is not a healthcare provider or medical facility
            </p>
            <p>
              We explicitly disclaim:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Any responsibility for medical outcomes or complications</li>
              <li>Liability for the quality of medical care provided</li>
              <li>Any warranties regarding medical procedures or results</li>
              <li>Responsibility for medical decisions or advice</li>
              <li>Liability for actions or omissions of healthcare providers</li>
            </ul>
            <p>
              All medical services are provided directly by independent healthcare providers who maintain their own licenses, insurance, and professional responsibilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p>You acknowledge and agree that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You must conduct your own due diligence on healthcare providers</li>
              <li>You are responsible for your medical decisions</li>
              <li>You must obtain independent medical advice</li>
              <li>You must provide accurate medical information</li>
              <li>You must obtain necessary travel documents and insurance</li>
              <li>You assume all risks associated with medical travel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment and Refunds</h2>
            <p>
              We facilitate payments between you and healthcare providers. All medical procedure costs are set by and paid directly to the healthcare providers. Our service fees are separate and non-refundable unless otherwise stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MediCol shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Any medical outcomes or complications</li>
              <li>Quality of medical care</li>
              <li>Actions or omissions of healthcare providers</li>
              <li>Travel-related issues or complications</li>
              <li>Lost wages or revenue</li>
              <li>Any indirect, consequential, or incidental damages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold MediCol harmless from any claims, damages, or expenses arising from your use of our services, including but not limited to medical outcomes, travel complications, or disputes with healthcare providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
              <br />
              Email: legal@medicol.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 