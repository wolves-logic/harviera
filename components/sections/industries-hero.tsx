"use client"
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { GraduationCap, Code2, Award, Rocket, Building2, Activity } from 'lucide-react'

export default function IndustriesHero() {
  const sectors = [
    { icon: GraduationCap, label: 'Education', color: 'bg-lavender/40' },
    { icon: Code2, label: 'IT & SaaS', color: 'bg-baby-blue/40' },
    { icon: Award, label: 'Training', color: 'bg-mint/40' },
    { icon: Rocket, label: 'Startups', color: 'bg-peach/40' },
    { icon: Building2, label: 'Enterprises', color: 'bg-sky/40' },
    { icon: Activity, label: 'Healthcare', color: 'bg-blush/40' },
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
            Who We Work With
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Industries We Serve
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Delivering tailored IT, AI, digital marketing, and education solutions across diverse sectors.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>Our clients span:</p>
          <div className="flex flex-wrap gap-2">
            {['Universities & Colleges', 'IT & SaaS Teams', 'Training Institutes', 'Growing Startups', 'Enterprises & SMEs'].map((client) => (
              <span key={client} className="glass-card px-3 py-1 text-sm bg-white/50">
                {client}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Link href="/case-studies">
            <Button variant="ghost">View case studies</Button>
          </Link>
        </div>
      </MotionDiv>

      {/* Right: Floating Industry Badges Illustration */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative" as any
      >
        <div className="glass-card p-8 bg-gradient-to-br from-mint/20 via-lavender/15 to-sky/20 relative min-h-[400px] flex items-center justify-center">
          {/* Central node/globe representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-lavender/30 to-baby-blue/30 backdrop-blur-xl" />
          </div>

          {/* Floating Industry Badges */}
          <div className="relative grid grid-cols-2 gap-4 w-full">
            {sectors.map((sector, i) => {
              const Icon = sector.icon
              return (
                <MotionDiv
                  key={sector.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 3 + i * 0.2, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: i * 0.3 
                  }}
                  className={`glass-card p-4 ${sector.color} flex flex-col items-center justify-center space-y-2 ${i === 5 ? 'col-span-2' : ''}`}
                  style={{
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  <Icon className="h-6 w-6 text-gray-800" />
                  <span className="text-sm font-medium text-center">{sector.label}</span>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}
