"use client"
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { GraduationCap, Award, TrendingUp } from 'lucide-react'

export default function CoursesHero() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-linear-hero" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
      {/* Left: Text Content */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6" as any
      >
        <div className="inline-block">
          <div className="glass-card-vibrant px-4 py-2 text-sm bg-gradient-radial-accent border border-accent/50">
            Learn. Upskill. Get job-ready.
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Courses & Programs
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Industry-relevant technical, digital, and career-focused programs designed to make you job-ready.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>Our programs cover:</p>
          <div className="flex flex-wrap gap-2">
            {['Full-stack & Cloud', 'Data & AI', 'Digital Marketing & Growth', 'Career & Soft Skills'].map((theme) => (
              <span key={theme} className="glass-card px-3 py-1 text-sm bg-mint/30">
                {theme}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact">
            <Button variant="primary">Talk to a counsellor</Button>
          </Link>
          <a href="#courses-grid" className="inline-block">
            <Button variant="ghost">View all courses</Button>
          </a>
        </div>
      </MotionDiv>

      {/* Right: Course Dashboard Illustration */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative" as any
      >
        <div className="glass-card p-8 bg-gradient-to-br from-lavender/20 via-sky/15 to-mint/20">
          {/* Main Course Card */}
          <MotionDiv
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card p-6 bg-white/60 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="h-6 w-6 text-gray-800" />
              <h3 className="font-medium">Full-Stack Development</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Progress</span>
                <span>68%</span>
              </div>
              <div className="h-2 bg-gray-200/50 rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-gradient-to-r from-lavender to-baby-blue" />
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-mint/40 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live session today
            </div>
          </MotionDiv>

          {/* Floating Feature Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Award, label: 'Job-ready' },
              { icon: TrendingUp, label: 'Mentor-led' },
              { icon: GraduationCap, label: 'Capstone' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <MotionDiv
                  key={item.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  className="glass-card p-3 bg-peach/30 flex flex-col items-center text-center"
                >
                  <Icon className="h-5 w-5 mb-1 text-gray-700" />
                  <span className="text-xs">{item.label}</span>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </MotionDiv>
      </div>
    </div>
  )
}
