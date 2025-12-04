"use client"
import Link from 'next/link'
import Button from '@/components/ui/button'

export default function HomeCtaStrip() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-cta-warm" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="glass-card-vibrant p-10 bg-gradient-cta shadow-glow-warm border border-accent/40 transition-all duration-500 ease-soft hover:scale-[1.02] hover:shadow-glow-accent relative">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to modernize your IT, AI, and education ecosystem?
          </h2>
          <p className="text-lg text-gray-700">
            Let's discuss your roadmap for development, consulting, marketing, or training.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-3 text-base">
                Schedule a consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}