import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Medical Tourism Blog | MediCol",
  description: "Stay informed about medical tourism, procedures, and healthcare insights in Medellín, Colombia."
}

const blogPosts = [
  {
    slug: "why-medellin-medical-tourism",
    title: "Why Medellín is Becoming the Medical Tourism Capital of Latin America",
    excerpt: "Discover why thousands of patients are choosing Medellín for their medical procedures, from world-class facilities to cost savings.",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Medical Tourism"
  },
  {
    slug: "preparing-for-surgery-abroad",
    title: "Complete Guide: Preparing for Surgery Abroad",
    excerpt: "Essential tips and checklist for planning your medical journey, from choosing the right surgeon to recovery planning.",
    date: "February 10, 2024",
    readTime: "7 min read",
    category: "Patient Guide"
  },
  {
    slug: "recovery-in-medellin",
    title: "Recovery in the City of Eternal Spring: What to Expect",
    excerpt: "Learn about the unique advantages of recovering in Medellín's perfect climate and world-class facilities.",
    date: "February 5, 2024",
    readTime: "6 min read",
    category: "Recovery"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl mb-6">
                Medical Tourism Insights
              </h1>
              <p className="text-xl text-gray-600">
                Expert advice, patient stories, and comprehensive guides to help you
                make informed decisions about your medical journey.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="p-6 md:p-8 flex flex-col h-full">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="text-primary font-medium">{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 