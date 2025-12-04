"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import { GraduationCap, Laptop, BarChart3, Brain, TrendingUp, Users, Cloud, Lock, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

type Course = {
  id: string
  title: string
  category: string
  categoryColor: string
  icon: LucideIcon
  shortDescription: string
  duration: string
  mode: 'Online' | 'Hybrid' | 'On-Campus'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  tags: string[]
  idealFor: string
}

export default function CoursesGrid() {
  const courses: Course[] = [
    {
      id: '1',
      title: 'Full-Stack Web Development (MERN / Next.js)',
      category: 'IT Development',
      categoryColor: 'bg-lavender',
      icon: Laptop,
      shortDescription: 'Master modern web development from frontend to backend with React, Next.js, Node.js, and MongoDB. Build production-ready applications.',
      duration: '6 months',
      mode: 'Hybrid',
      level: 'Intermediate',
      tags: ['Job-ready', 'Capstone project', 'Mentor-led'],
      idealFor: 'Final year students, early professionals',
    },
    {
      id: '2',
      title: 'Cloud & DevOps Essentials',
      category: 'IT Development',
      categoryColor: 'bg-lavender',
      icon: Cloud,
      shortDescription: 'Learn AWS/Azure fundamentals, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code for modern cloud deployment.',
      duration: '12 weeks',
      mode: 'Online',
      level: 'Intermediate',
      tags: ['Hands-on labs', 'Certification prep'],
      idealFor: 'Developers, IT professionals',
    },
    {
      id: '3',
      title: 'Data Analytics with Python & SQL',
      category: 'Data & AI',
      categoryColor: 'bg-baby-blue',
      icon: BarChart3,
      shortDescription: 'Transform raw data into insights using Python, Pandas, SQL, and visualization tools. Work on real-world business cases.',
      duration: '4 months',
      mode: 'Online',
      level: 'Beginner',
      tags: ['Job-ready', 'Real datasets', 'Career support'],
      idealFor: 'Career switchers, analysts',
    },
    {
      id: '4',
      title: 'AI & Gen AI Foundations',
      category: 'Data & AI',
      categoryColor: 'bg-baby-blue',
      icon: Brain,
      shortDescription: 'Understand machine learning, deep learning, and generative AI models. Build AI-powered applications using OpenAI, LangChain, and more.',
      duration: '5 months',
      mode: 'Hybrid',
      level: 'Advanced',
      tags: ['Cutting-edge', 'Capstone project'],
      idealFor: 'Tech professionals, ML enthusiasts',
    },
    {
      id: '5',
      title: 'Performance Marketing & SEO',
      category: 'Digital Marketing',
      categoryColor: 'bg-peach',
      icon: TrendingUp,
      shortDescription: 'Drive measurable growth with Google Ads, Facebook Ads, SEO best practices, and analytics. Launch real campaigns with budget.',
      duration: '10 weeks',
      mode: 'Online',
      level: 'Beginner',
      tags: ['Job-ready', 'Live campaigns', 'Certification'],
      idealFor: 'Marketers, entrepreneurs, students',
    },
    {
      id: '6',
      title: 'Social Media Strategy & Content Marketing',
      category: 'Digital Marketing',
      categoryColor: 'bg-peach',
      icon: MessageCircle,
      shortDescription: 'Create compelling content, grow social audiences, and build brand presence across Instagram, LinkedIn, YouTube, and TikTok.',
      duration: '8 weeks',
      mode: 'Online',
      level: 'Beginner',
      tags: ['Portfolio building', 'Brand projects'],
      idealFor: 'Content creators, brand managers',
    },
    {
      id: '7',
      title: 'Communication, Soft Skills & Interview Prep',
      category: 'Career Skills',
      categoryColor: 'bg-mint',
      icon: Users,
      shortDescription: 'Build confidence in public speaking, professional communication, resume writing, and ace technical + HR interviews.',
      duration: '6 weeks',
      mode: 'On-Campus',
      level: 'Beginner',
      tags: ['Mock interviews', 'Resume review', 'Personality dev'],
      idealFor: 'Students, early professionals',
    },
    {
      id: '8',
      title: 'Cybersecurity Fundamentals',
      category: 'IT Development',
      categoryColor: 'bg-lavender',
      icon: Lock,
      shortDescription: 'Protect systems and data with ethical hacking, network security, vulnerability assessment, and security best practices.',
      duration: '3 months',
      mode: 'Hybrid',
      level: 'Intermediate',
      tags: ['Hands-on labs', 'Industry tools'],
      idealFor: 'IT professionals, security enthusiasts',
    },
    {
      id: '9',
      title: 'Product Management & Strategy',
      category: 'Career Skills',
      categoryColor: 'bg-mint',
      icon: GraduationCap,
      shortDescription: 'Learn to define product vision, roadmaps, user research, and cross-functional leadership for tech products.',
      duration: '10 weeks',
      mode: 'Online',
      level: 'Intermediate',
      tags: ['Case studies', 'PM frameworks'],
      idealFor: 'Aspiring PMs, team leads',
    },
  ]

  return (
    <div id="courses-grid" className="space-y-8">
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
        {courses.map((course) => {
          const Icon = course.icon
          return (
            <MotionDiv
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex"
            >
              <div className="glass-card-vibrant p-6 flex flex-col h-full border border-accent/30 transition-all duration-300 ease-soft hover:-translate-y-2 hover:shadow-glow-accent hover:border-accent/50\">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium ${course.categoryColor} rounded-full shadow-soft-pastel`}>
                    <Icon className="h-3.5 w-3.5" />
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-600">{course.level}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 flex-grow">{course.shortDescription}</p>

                {/* Metadata */}
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-3 pb-3 border-b border-gray-200/50">
                  <span>⏱ {course.duration}</span>
                  <span>•</span>
                  <span>{course.mode}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-white/50 rounded-md border border-gray-200/50">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ideal For */}
                <p className="text-xs text-gray-600 italic mb-4">Ideal for: {course.idealFor}</p>

                {/* CTA */}
                <div>
                  <a href="#" className="inline-block w-full">
                    <Button variant="primary" className="w-full">View details</Button>
                  </a>
                </div>
              </div>
            </MotionDiv>
          )
        })}
      </MotionDiv>
    </div>
  )
}

