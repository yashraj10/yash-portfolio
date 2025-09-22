import { getProfile, getSkills, getEducation } from '@/lib/content'
import Section from '@/components/Section'
import Badge from '@/components/Badge'

export const metadata = {
  title: 'About — Yashraj Jadhav',
  description: 'Learn about Yashraj Jadhav, a data scientist and MSBA student at USC Marshall focused on ML, experimentation, and causal inference.',
}

export default function About() {
  const profile = getProfile()
  const skills = getSkills()
  const education = getEducation()

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl leading-relaxed mb-8">
              {profile.bio}
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in turning complex data into actionable insights through advanced analytics, 
              machine learning, and rigorous experimentation. My experience spans healthcare, 
              pharmaceuticals, and technology, where I&apos;ve helped organizations make data-driven 
              decisions that drive real business impact.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="accent" size="md">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-[#4C6FFF] font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                    {edu.date}
                  </div>
                </div>
                
                {edu.coursework && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" size="sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
