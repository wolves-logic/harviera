"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { Calendar } from 'lucide-react'

export default function ServicesCtaStrip() {
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
            <Calendar className="h-8 w-8 text-gray-800" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Not sure where to start?
          </h2>
          
          <p className="text-gray-700 text-lg">
            Tell us your goals, and we'll design a tailored mix of development, consulting, marketing, and training services.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link href="/contact">
              <Button variant="primary">Schedule a free consultation</Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="ghost">Explore case studies</Button>
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
