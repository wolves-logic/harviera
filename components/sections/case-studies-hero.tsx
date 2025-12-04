"use client"
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { TrendingUp, Clock, Users } from 'lucide-react'

export default function CaseStudiesHero() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-linear-hero" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80")',
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
            Real Outcomes
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Case Studies & Success Stories
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Measurable results across education, IT, digital marketing, and training—delivering efficiency, engagement, and growth.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>Proven wins include:</p>
          <div className="flex flex-wrap gap-2">
            {['30% faster onboarding', 'Higher application conversions', 'Reduced IT overhead', 'Improved student engagement'].map((win) => (
              <span key={win} className="glass-card px-3 py-1 text-sm bg-lavender/30">
                {win}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Link href="/contact">
            <Button variant="ghost">Talk to us about a similar project</Button>
          </Link>
        </div>
      </MotionDiv>

      {/* Right: Analytics Dashboard Illustration */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative" as any
      >
        <div className="glass-card p-8 bg-gradient-to-br from-lavender/20 via-sky/15 to-mint/20">
          {/* Main Metric Card */}
          <MotionDiv
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card p-6 bg-white/60 mb-6 text-center"
          >
            <div className="text-5xl font-bold text-gray-900 mb-2">+32%</div>
            <p className="text-sm text-gray-700">Average Performance Improvement</p>
            
            {/* Simple graph representation */}
            <div className="mt-4 flex items-end justify-center gap-1 h-16">
              {[40, 60, 45, 70, 85, 95].map((height, i) => (
                <div
                  key={i}
                  className="w-8 bg-gradient-to-t from-lavender to-baby-blue rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </MotionDiv>

          {/* Floating Metric Cards */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: TrendingUp, label: '+45% engagement', color: 'bg-mint/40' },
              { icon: Clock, label: '-28% processing time', color: 'bg-peach/40' },
              { icon: Users, label: '+60% user adoption', color: 'bg-baby-blue/40' },
            ].map((metric, i) => {
              const Icon = metric.icon
              return (
                <MotionDiv
                  key={metric.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  className={`glass-card p-3 ${metric.color} flex items-center gap-2 ${i === 2 ? 'col-span-2' : ''}`}
                >
                  <Icon className="h-4 w-4 text-gray-700 flex-shrink-0" />
                  <span className="text-xs font-medium">{metric.label}</span>
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
