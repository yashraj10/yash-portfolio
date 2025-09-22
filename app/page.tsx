import { getProfile, getFeaturedProjects, getTestimonials } from '@/lib/content'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import { Download, ExternalLink } from 'lucide-react'

export default function Home() {
  const profile = getProfile()
  const featuredProjects = getFeaturedProjects()
  const testimonials = getTestimonials()

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            {profile.tagline}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            {profile.location}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {profile.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/projects" size="lg" className="group">
              View Projects
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button href="/resume" variant="outline" size="lg" className="group">
              <Download className="mr-2 group-hover:translate-y-[-1px] transition-transform" size={20} />
              Download Resume PDF
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick Stats */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#4C6FFF] mb-2">
                {profile.yearsExperience}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4C6FFF] mb-2">
                {profile.coreSkills.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Core Skills
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4C6FFF] mb-2">
                2+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Publications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4C6FFF] mb-2">
                $4.2M+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Business Impact
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Recent work showcasing data science and machine learning expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                time={project.time}
                summary={project.summary}
                stack={project.stack}
                links={project.links}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Skills Preview */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Technologies and methodologies I work with
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {profile.coreSkills.map((skill, index) => (
              <Badge key={index} variant="accent" size="md">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/about" variant="outline">
              View All Skills
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Testimonials from colleagues and collaborators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}