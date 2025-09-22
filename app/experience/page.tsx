import { getExperience } from '@/lib/content'
import Section from '@/components/Section'
import TimelineItem from '@/components/TimelineItem'

export const metadata = {
  title: 'Experience — Yashraj Jadhav',
  description: 'Professional experience in data science, machine learning, and analytics at Capgemini Technology Services.',
}

export default function Experience() {
  const experience = getExperience()

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Building data-driven solutions and driving business impact through advanced analytics, 
            machine learning, and experimentation.
          </p>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                company={exp.company}
                role={exp.role}
                location={exp.location}
                start={exp.start}
                end={exp.end}
                bullets={exp.bullets}
                tags={exp.tags}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications & Publications */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Databricks Lakehouse Fundamentals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Certified in modern data lakehouse architecture and analytics
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                IEEE ICCUBEA Publication
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                &quot;Raspberry Pi ML Ration Dispenser&quot; - Published research on IoT and machine learning applications
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
