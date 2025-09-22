import { getProjects } from '@/lib/content'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Badge from '@/components/Badge'

export const metadata = {
  title: 'Projects — Yashraj Jadhav',
  description: 'Data science and machine learning projects showcasing expertise in Python, ML algorithms, and data analysis.',
}

export default function Projects() {
  const projects = getProjects()

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Data science and machine learning projects demonstrating expertise in Python, 
            statistical modeling, and advanced analytics.
          </p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                time={project.time}
                summary={project.summary}
                outcome={project.outcome}
                stack={project.stack}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Showcase */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {Array.from(new Set(projects.flatMap(p => p.stack))).map((tech, index) => (
              <Badge key={index} variant="accent" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
