"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import { Code2, Brain, TrendingUp, GraduationCap, Users } from 'lucide-react'
import ServiceCategoryCard from './service-category-card'

export default function ServicesGrid() {
  const categories = [
    {
      icon: Code2,
      title: 'IT Development & Solutions',
      description: 'Build scalable, modern software from concept to deployment with cloud-native architecture.',
      services: ['Custom Software', 'Web Apps', 'Mobile Apps', 'Cloud Deployment', 'GEN AI Development', 'Automation & AI', 'Enterprise IT'],
      accentColor: 'bg-lavender',
    },
    {
      icon: Brain,
      title: 'IT Consulting & Advisory',
      description: 'Strategic guidance to optimize your technology stack, infrastructure, and digital transformation roadmap.',
      services: ['Tech Strategy', 'Cloud & Infra', 'Cybersecurity', 'Data Analytics', 'Digital Transformation', 'Process Optimization'],
      accentColor: 'bg-mint',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven campaigns across SEO, social, PPC, content, and analytics.',
      services: ['SEO', 'Social Media', 'PPC', 'Content Marketing', 'Email & WhatsApp', 'Branding', 'Analytics'],
      accentColor: 'bg-peach',
    },
    {
      icon: GraduationCap,
      title: 'Educational Consulting',
      description: 'Navigate overseas admissions, university selection, and EdTech solutions with expert support.',
      services: ['Overseas Admissions', 'University Selection', 'Documentation Support', 'EdTech Advisory', 'Curriculum Advisory', 'Career Counselling'],
      accentColor: 'bg-baby-blue',
    },
    {
      icon: Users,
      title: 'Training & Skill Development',
      description: 'Equip your team with technical, soft skills, and job-ready training programs tailored to industry needs.',
      services: ['Technical Training', 'Corporate Training', 'Campus Training', 'Job-Ready Programs', 'Soft Skills', 'LMS Solutions'],
      accentColor: 'bg-sky',
    },
  ]

  return (
    <div className="space-y-12 relative">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 -mx-[50vw] left-1/2 right-1/2 w-screen opacity-5 -z-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative">
        <div className="inline-block">
          <div className="glass-card-vibrant px-4 py-2 text-sm bg-gradient-radial-accent border border-accent/50">
            Service Catalog
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Solutions designed for modern teams
        </h2>
        <p className="text-gray-700">
          From product engineering to admissions and training, choose what you need or combine multiple tracks.
        </p>
      </div>

      {/* Service Categories Grid */}
      <MotionDiv
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {categories.map((category) => (
          <MotionDiv
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ServiceCategoryCard {...category} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  )
}

