import { getProfile } from '@/lib/content'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export const metadata = {
  title: 'Contact — Yashraj Jadhav',
  description: 'Get in touch with Yashraj Jadhav for data science opportunities, collaborations, or questions.',
}

export default function Contact() {
  const profile = getProfile()

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            I&apos;m always interested in discussing data science opportunities, 
            collaborations, or answering questions about my work.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Direct Contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4C6FFF]/10 dark:bg-[#4C6FFF]/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-[#4C6FFF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-[#4C6FFF] hover:text-[#3B5CE8] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4C6FFF]/10 dark:bg-[#4C6FFF]/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#4C6FFF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                    <a 
                      href={`tel:${profile.phone}`}
                      className="text-[#4C6FFF] hover:text-[#3B5CE8] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4C6FFF]/10 dark:bg-[#4C6FFF]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#4C6FFF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">{profile.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4C6FFF]/10 dark:bg-[#4C6FFF]/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-[#4C6FFF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                    <a 
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4C6FFF] hover:text-[#3B5CE8] transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Privacy Note:</strong> Messages are used only to respond to your inquiry. 
                I respect your privacy and won&apos;t share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
