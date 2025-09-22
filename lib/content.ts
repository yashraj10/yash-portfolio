import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Profile {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
  yearsExperience: string;
  coreSkills: string[];
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  publications?: Array<{
    title: string;
    venue: string;
    year: string;
  }>;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  date: string;
  coursework?: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  title: string;
  time: string;
  summary: string;
  outcome?: string;
  stack: string[];
  links: string[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export function getProfile(): Profile {
  const fullPath = path.join(contentDirectory, 'profile.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getEducation(): Education[] {
  const fullPath = path.join(contentDirectory, 'education.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getExperience(): Experience[] {
  const fullPath = path.join(contentDirectory, 'experience.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProjects(): Project[] {
  const fullPath = path.join(contentDirectory, 'projects.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getSkills(): string[] {
  const fullPath = path.join(contentDirectory, 'skills.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getFeaturedProjects(): Project[] {
  const projects = getProjects();
  return projects.filter(project => project.featured);
}

export function getTestimonials(): Testimonial[] {
  const fullPath = path.join(contentDirectory, 'testimonials.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}
