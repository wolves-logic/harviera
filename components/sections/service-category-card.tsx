"use client"
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type ServiceCategoryCardProps = {
  icon: LucideIcon
  title: string
  description: string
  services: string[]
  accentColor: string
}

export default function ServiceCategoryCard({ 
  icon: Icon, 
  title, 
  description, 
  services, 
  accentColor 
}: ServiceCategoryCardProps) {
  return (
    <div className="glass-card-vibrant p-6 md:p-7 relative overflow-hidden border border-accent/30 transition-all duration-300 ease-soft hover:-translate-y-2 hover:shadow-glow-accent hover:border-accent/50">
      {/* Accent top bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${accentColor} shadow-glow-accent`} />
      
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${accentColor} mb-4`}>
        <Icon className="h-7 w-7 text-gray-800" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">{description}</p>

      {/* Sub-services chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {services.map((service) => (
          <span 
            key={service}
            className="inline-flex px-3 py-1 text-xs font-medium bg-white/50 rounded-full border border-gray-200/50"
          >
            {service}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link 
        href="/contact" 
        className="text-sm text-gray-800 hover:text-gray-900 font-medium inline-flex items-center gap-1 group"
      >
        Talk to us about this
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  )
}