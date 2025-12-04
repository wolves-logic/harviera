"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { Bell } from 'lucide-react'
import { useState } from 'react'

export default function ResourcesCtaStrip() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup (placeholder)
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="glass-card-vibrant p-8 md:p-12 bg-gradient-cta shadow-glow-warm border border-accent/40 text-center transition-all duration-500 ease-soft hover:scale-[1.02] hover:shadow-glow-accent">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/60 mb-2">
            <Bell className="h-8 w-8 text-gray-800" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Stay updated with new resources
          </h2>
          
          <p className="text-gray-700 text-lg">
            Get updates on our latest blogs, guides, and webinars on IT, AI, digital and education.
          </p>

          {/* Newsletter Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-sm bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
              required
            />
            <Button type="submit" variant="primary">Notify me</Button>
          </form>

          {/* Alternative CTAs */}
          <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-gray-200/30">
            <Link href="/contact">
              <Button variant="ghost">Talk to our team</Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost">Explore services</Button>
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
