"use client"
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { BookOpen, FileText, Video, Cloud, Brain, GraduationCap, TrendingUp, Users } from 'lucide-react'

export default function ResourcesHero() {
  const topics = [
    { label: 'Cloud', icon: Cloud },
    { label: 'AI', icon: Brain },
    { label: 'Admissions', icon: GraduationCap },
    { label: 'Marketing', icon: TrendingUp },
    { label: 'Careers', icon: Users },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: Text Content */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6" as any
      >
        <div className="inline-block">
          <div className="glass-card-vibrant px-4 py-2 text-sm bg-gradient-radial-accent border border-accent/50">
            Insights & Learning
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Resources & Knowledge Hub
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Explore our collection of insights on IT development, cloud & AI, digital marketing, EdTech & student success, and career skills.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>Content types:</p>
          <div className="flex flex-wrap gap-2">
            {['Blogs', 'Guides', 'Webinars', 'Playbooks'].map((type) => (
              <span key={type} className="glass-card px-3 py-1 text-sm bg-white/50">
                {type}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Link href="/contact">
            <Button variant="ghost">Get in touch</Button>
          </Link>
        </div>
      </MotionDiv>

      {/* Right: Content Dashboard Illustration */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative" as any
      >
        <div className="glass-card p-8 bg-gradient-to-br from-sky/20 via-lavender/15 to-mint/20 relative">
          {/* Main Content Card */}
          <MotionDiv
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card p-6 bg-white/60 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-6 w-6 text-gray-800" />
              <h3 className="font-medium">Latest Insights</h3>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 text-xs bg-lavender/40 rounded-md">Blog</span>
              <span className="px-2 py-1 text-xs bg-mint/40 rounded-md">Guide</span>
              <span className="px-2 py-1 text-xs bg-sky/40 rounded-md">Webinar</span>
            </div>
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-2 bg-gray-200/50 rounded-full w-full" />
              ))}
              <div className="h-2 bg-gray-200/50 rounded-full w-2/3" />
            </div>
          </MotionDiv>

          {/* Floating Topic Chips */}
          <div className="grid grid-cols-2 gap-2">
            {topics.map((topic, i) => {
              const Icon = topic.icon
              return (
                <MotionDiv
                  key={topic.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className="glass-card p-3 bg-peach/30 flex items-center gap-2"
                >
                  <Icon className="h-4 w-4 text-gray-700 flex-shrink-0" />
                  <span className="text-xs font-medium">{topic.label}</span>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}
