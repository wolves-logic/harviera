"use client"
import { MotionDiv } from '@/components/common/motion-div'
import { MessageCircle, Calendar, Mail, Award } from 'lucide-react'

export default function ContactHero() {
  const requests = [
    'Build a new product / portal',
    'Modernize our IT stack',
    'Grow our digital presence',
    'Plan study abroad or campus programs',
    'Upskill our team or students',
  ]

  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-linear-hero" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80")',
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
            Let's Talk
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Contact Harviera
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Tell us what you're building next. We're here to discuss IT development & automation, consulting, digital marketing, admissions, and training.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p className="font-medium">Typical requests:</p>
          <ul className="space-y-2 ml-4">
            {requests.map((request) => (
              <li key={request} className="flex items-start gap-2">
                <span className="text-lavender mt-0.5">✓</span>
                <span className="text-sm">{request}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-600 italic">
          We typically respond within 1–2 business days.
        </p>
      </MotionDiv>

      {/* Right: Collaboration Illustration */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative" as any
      >
        <div className="glass-card p-8 bg-gradient-to-br from-lavender/20 via-sky/15 to-mint/20 relative">
          {/* Main Contact Card */}
          <MotionDiv
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card p-6 bg-white/60 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-6 w-6 text-gray-800" />
              <h3 className="font-medium">Start Conversation</h3>
            </div>
            
            {/* Chat Bubbles */}
            <div className="space-y-2">
              <div className="bg-lavender/30 rounded-2xl rounded-tl-sm p-3 text-sm max-w-[80%]">
                Need help with cloud migration?
              </div>
              <div className="bg-mint/30 rounded-2xl rounded-tr-sm p-3 text-sm max-w-[80%] ml-auto text-right">
                We'd love to help! Let's discuss.
              </div>
            </div>
          </MotionDiv>

          {/* Floating Action Chips */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Calendar, label: 'Consultation', color: 'bg-baby-blue/40' },
              { icon: Award, label: 'Demo', color: 'bg-peach/40' },
              { icon: MessageCircle, label: 'Roadmap', color: 'bg-mint/40' },
              { icon: Mail, label: 'Support', color: 'bg-sky/40' },
            ].map((chip, i) => {
              const Icon = chip.icon
              return (
                <MotionDiv
                  key={chip.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className={`glass-card p-3 ${chip.color} flex items-center gap-2`}
                >
                  <Icon className="h-4 w-4 text-gray-700 flex-shrink-0" />
                  <span className="text-xs font-medium">{chip.label}</span>
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
