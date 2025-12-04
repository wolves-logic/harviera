"use client"
import Link from 'next/link'
import Button from '@/components/ui/button'
import { Globe, Users, Award } from 'lucide-react'
import { MotionDiv } from '@/components/common/motion-div'

export default function AboutHero() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-linear-hero" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")',
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
        className="space-y-6"
      >
        <div className="inline-block">
          <div className="glass-card-vibrant px-4 py-2 text-sm bg-gradient-radial-accent border border-accent/50">
            Who We Are
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            About Harviera IT Solutions
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            A unified IT, AI, Digital & Education partner helping organizations scale, transform, and innovate.
          </p>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Harviera IT Solutions is a full-spectrum technology and education partner. We deliver cutting-edge IT development, 
            strategic consulting, digital marketing excellence, and educational consulting services that empower businesses 
            and learners worldwide.
          </p>
          <p>
            From custom software and cloud infrastructure to AI-driven automation, performance marketing, and overseas 
            education guidance — we bring together expertise across IT Development, Consulting, Digital Marketing, 
            Educational Consulting, and Training & Skill Development under one roof.
          </p>
        </div>

        <div>
          <Link href="/services">
            <Button variant="primary">Explore Our Services</Button>
          </Link>
        </div>
      </MotionDiv>

      {/* Right: Team Image */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="glass-card p-8 bg-gradient-to-br from-lavender/30 via-mint/20 to-sky/30 relative overflow-hidden">
          {/* Central Globe/Network */}
          <MotionDiv
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card p-6 bg-white/50 mx-auto w-32 h-32 rounded-full flex items-center justify-center mb-6"
          >
            <Globe className="h-16 w-16 text-gray-900" />
          </MotionDiv>

          {/* Floating Leadership Avatars */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[1, 2, 3].map((i) => (
              <MotionDiv
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className="glass-card p-3 bg-baby-blue/40 rounded-2xl flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-gray-700" />
                </div>
                <div className="text-xs text-center text-gray-700">Leader {i}</div>
              </MotionDiv>
            ))}
          </div>

          {/* Floating Value Badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['Innovation', 'Integrity', 'Excellence'].map((value, i) => (
              <MotionDiv
                key={value}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                className="glass-card px-3 py-1 text-sm bg-peach/30 inline-flex items-center gap-1"
              >
                <Award className="h-3 w-3" />
                {value}
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>
      </div>
    </div>
  )
}
