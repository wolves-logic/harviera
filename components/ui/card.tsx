import type { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`glass-card-vibrant p-6 border border-accent/20 ${className}`}>{children}</div>
}
