"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export default function CoursesCtaStrip() {
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
            <MessageCircle className="h-8 w-8 text-gray-800" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Need help choosing the right course?
          </h2>
          
          <p className="text-gray-700 text-lg">
            Share your background and goals, and we'll recommend a tailored learning path that matches your career aspirations.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link href="/contact">
              <Button variant="primary">Talk to a counsellor</Button>
            </Link>
            <a href="#" className="inline-block">
              <Button variant="ghost">Download course brochure</Button>
            </a>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
