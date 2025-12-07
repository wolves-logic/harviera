"use client"
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'

export default function HomeHero() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-linear-hero" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative" as any
      >
      {/* Left: Text Content */}
      <div className="space-y-6">
        <div className="inline-block">
          <div className="glass-card-vibrant px-4 py-2 text-sm bg-gradient-radial-accent border border-accent/50">
            Smart IT, AI & Education ecosystems
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Harviera IT Solutions
          </h1>
          <p className="mt-3 text-xl sm:text-2xl text-gray-800">
            One partner for IT, AI, Digital & Education growth.
          </p>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>✓ IT Development & Solutions</p>
          <p>✓ IT Consulting & Advisory</p>
          <p>✓ Digital Marketing</p>
          <p>✓ Educational Consulting</p>
          <p>✓ Training & Skill Development</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact">
            <Button variant="primary">Talk to Our Team</Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost">Explore Services</Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {['IT Development', 'Consulting', 'Digital Growth', 'EdTech & Training'].map((badge) => (
            <span key={badge} className="glass-card px-3 py-1 text-xs bg-white/60">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Right: Visual Illustration */}
      <div className="relative">
        <MotionDiv
          className="glass-card p-8 bg-gradient-to-br from-baby-blue/30 to-lavender/30"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="space-y-4">
            <div className="glass-card p-4 bg-white/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Dashboard Metrics</span>
                <span className="text-xs text-gray-600">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-2xl font-semibold">98%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">50+</div>
                  <div className="text-xs text-gray-600">Clients</div>
                </div>
              </div>
            </div>

            <MotionDiv
              className="glass-card p-4 bg-lavender/40"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="text-sm font-medium mb-2">AI & Automation</div>
              <div className="space-y-1 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>ML Models Running</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Cloud Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  <span>API Integrations</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              className="glass-card p-3 bg-mint/40 inline-block"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="text-sm font-medium">🎓 Job-ready courses</div>
              <div className="text-xs text-gray-600 mt-1">500+ learners trained</div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
    </div>
  )
}

