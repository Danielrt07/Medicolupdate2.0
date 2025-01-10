import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL('https://medicol.com'),
  title: {
    default: "MediCol | Premium Medical Tourism in Medellín, Colombia",
    template: "%s | MediCol"
  },
  description: "Experience world-class medical procedures in Medellín, Colombia. Premium healthcare at 40-70% lower costs. Plastic surgery, stem cell therapy, and dental treatments.",
  keywords: [
    "medical tourism",
    "plastic surgery colombia",
    "stem cell therapy medellin",
    "dental tourism colombia",
    "cosmetic surgery abroad",
    "affordable healthcare",
    "medical travel",
    "healthcare tourism"
  ],
  authors: [{ name: "MediCol" }],
  creator: "MediCol",
  publisher: "MediCol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medicol.com',
    title: 'MediCol | Premium Medical Tourism in Medellín, Colombia',
    description: 'Experience world-class medical procedures in Medellín, Colombia. Premium healthcare at 40-70% lower costs.',
    siteName: 'MediCol',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MediCol - Medical Tourism in Medellín',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediCol | Premium Medical Tourism in Medellín, Colombia',
    description: 'Experience world-class medical procedures in Medellín, Colombia. Premium healthcare at 40-70% lower costs.',
    images: ['/twitter-image.png'],
    creator: '@medicol',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://medicol.com" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 