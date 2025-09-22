import { getProfile, getExperience, getEducation, getSkills, getProjects } from '@/lib/content'
import Badge from '@/components/Badge'
import DownloadButton from '@/components/DownloadButton'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export const metadata = {
  title: 'Resume — Yashraj Jadhav',
  description: 'Download Yashraj Jadhav\'s resume - Data Scientist with expertise in ML, analytics, and experimentation.',
}

export default function Resume() {
  const profile = getProfile()
  const experience = getExperience()
  const education = getEducation()
  const skills = getSkills()
  const projects = getProjects()


  return (
    <>
      {/* Header Actions */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Resume
            </h1>
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
        <div className="bg-white dark:bg-gray-900 print:bg-white print:text-black">
          {/* Header */}
          <div className="text-center mb-8 print:mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white print:text-black mb-2">
              {profile.name}
            </h1>
            <p className="text-lg text-[#4C6FFF] print:text-black font-medium mb-2">
              {profile.tagline}
            </p>
            <p className="text-gray-600 dark:text-gray-300 print:text-black mb-4">
              {profile.location}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300 print:text-black">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-[#4C6FFF] print:hover:text-black">
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-1 hover:text-[#4C6FFF] print:hover:text-black">
                <Phone size={16} />
                {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#4C6FFF] print:hover:text-black">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 border-b border-gray-200 dark:border-gray-700 print:border-black pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
              {profile.bio} I specialize in turning complex data into actionable insights through advanced analytics, 
              machine learning, and rigorous experimentation. My experience spans healthcare, pharmaceuticals, 
              and technology, where I've helped organizations make data-driven decisions that drive real business impact.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b border-gray-200 dark:border-gray-700 print:border-black pb-1">
              Professional Experience
            </h2>
            <div className="space-y-6 print:space-y-4">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black">
                        {exp.role}
                      </h3>
                      <p className="text-[#4C6FFF] print:text-black font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 print:text-black mt-1 sm:mt-0">
                      {exp.start} — {exp.end}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 print:text-black">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b border-gray-200 dark:border-gray-700 print:border-black pb-1">
              Education
            </h2>
            <div className="space-y-4 print:space-y-3">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black">
                        {edu.degree}
                      </h3>
                      <p className="text-[#4C6FFF] print:text-black font-medium">{edu.school}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 print:text-black mt-1 sm:mt-0">
                      {edu.date}
                    </div>
                  </div>
                  {edu.coursework && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 print:text-black mb-1">
                        Relevant Coursework:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                        {edu.coursework.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b border-gray-200 dark:border-gray-700 print:border-black pb-1">
              Key Projects
            </h2>
            <div className="space-y-4 print:space-y-3">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 print:text-black">
                      {project.time}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm mb-2">
                    {project.summary}
                  </p>
                  {project.outcome && (
                    <p className="text-sm font-medium text-[#4C6FFF] print:text-black mb-2">
                      <strong>Outcome:</strong> {project.outcome}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-800 print:bg-gray-100 print:text-black text-gray-700 dark:text-gray-300 print:text-black px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b border-gray-200 dark:border-gray-700 print:border-black pb-1">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-sm bg-gray-100 dark:bg-gray-800 print:bg-gray-100 print:text-black text-gray-700 dark:text-gray-300 print:text-black px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications & Publications */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b border-gray-200 dark:border-gray-700 print:border-black pb-1">
              Certifications & Publications
            </h2>
            <div className="space-y-3 print:space-y-2">
              {profile.certifications?.map((cert, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 dark:text-white print:text-black">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
              {profile.publications?.map((pub, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 dark:text-white print:text-black">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                    {pub.venue} • {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
