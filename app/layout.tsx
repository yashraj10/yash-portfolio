import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getProfile } from '@/lib/content'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yashraj Jadhav — Data Scientist',
  description: 'MSBA @ USC. Data science, ML, experimentation, and decision science. Projects, experience, and contact.',
  keywords: ['data scientist', 'machine learning', 'analytics', 'USC', 'MSBA', 'experimentation'],
  authors: [{ name: 'Yashraj Jadhav' }],
  creator: 'Yashraj Jadhav',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yashrajjadhav.com',
    title: 'Yashraj Jadhav — Data Scientist',
    description: 'MSBA @ USC. Data science, ML, experimentation, and decision science. Projects, experience, and contact.',
    siteName: 'Yashraj Jadhav Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashraj Jadhav — Data Scientist',
    description: 'MSBA @ USC. Data science, ML, experimentation, and decision science. Projects, experience, and contact.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = getProfile();

  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Prefetch critical pages */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/experience" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/resume" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": profile.name,
              "jobTitle": "Data Scientist",
              "description": profile.tagline,
              "url": "https://yashrajjadhav.com",
              "email": profile.email,
              "telephone": profile.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "sameAs": [
                profile.linkedin
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Southern California, Marshall School of Business"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer email={profile.email} linkedin={profile.linkedin} />
        </div>
      </body>
    </html>
  )
}