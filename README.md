# Yashraj Jadhav - Portfolio Website

A minimalist, high-performance portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing data science projects, professional experience, and technical skills with a focus on clarity, speed, and accessibility.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Performance**: Optimized for speed with minimal JavaScript and CSS transitions
- **Accessibility**: WCAG compliant with proper focus management
- **Print Ready**: Resume page optimized for printing

## 📁 Project Structure

```
yashraj-portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Professional experience
│   ├── projects/          # Project showcase
│   ├── contact/           # Contact form
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ProjectCard.tsx    # Project display card
│   ├── TestimonialCard.tsx # Testimonial display
│   ├── Button.tsx         # Custom button component
│   ├── Badge.tsx          # Skill/tech badge
│   ├── Section.tsx        # Page section wrapper
│   ├── TimelineItem.tsx   # Experience timeline
│   └── ThemeToggle.tsx    # Dark mode toggle
├── content/               # JSON content files
│   ├── profile.json       # Personal information
│   ├── projects.json      # Project data
│   ├── experience.json    # Work experience
│   ├── education.json     # Educational background
│   ├── skills.json        # Technical skills
│   └── testimonials.json  # Client testimonials
└── lib/
    └── content.ts         # Content management utilities
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS transitions and transforms
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yashrajjadhav/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Content Management

All content is managed through JSON files in the `content/` directory:

- **profile.json**: Update personal information, bio, and contact details
- **projects.json**: Add/modify projects with descriptions, tech stacks, and links
- **experience.json**: Update work experience and achievements
- **education.json**: Modify educational background
- **skills.json**: Update technical skills list
- **testimonials.json**: Add client testimonials

### Styling

- Colors and themes can be modified in `app/globals.css`
- Component styles use Tailwind CSS classes
- Custom animations are defined in the CSS file

### SEO

- Update metadata in `app/layout.tsx`
- Modify sitemap in `app/sitemap.ts`
- Update robots.txt in `app/robots.ts`

## 🎨 Design Features

- **Color Scheme**: Professional blue (#4C6FFF) with gray accents
- **Typography**: Inter font family for readability
- **Animations**: Smooth transitions and hover effects
- **Layout**: Clean, modern design with proper spacing
- **Responsive**: Works on all device sizes

## 📱 Pages

1. **Home**: Hero section, featured projects, skills preview, testimonials
2. **About**: Personal bio, skills showcase, education
3. **Experience**: Professional timeline with achievements
4. **Projects**: Complete project portfolio with tech stacks
5. **Contact**: Contact form and direct contact information
6. **Resume**: Print-ready resume page

## 🔧 Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for better performance
- Optimized animations with Framer Motion
- SEO best practices implemented
- Fast loading with Next.js optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: yashrajjadhav269@gmail.com
- **LinkedIn**: [yashrajjadhav](https://www.linkedin.com/in/yashrajjadhav/)
- **Portfolio**: [yashrajjadhav.com](https://yashrajjadhav.com)

---

Built with ❤️ by Yashraj Jadhav