type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-soft will-change-transform'
  const variants = {
    primary: 'bg-gradient-cta text-white shadow-glow-accent hover:shadow-glow-warm hover:scale-105 hover:-translate-y-1',
    ghost: 'bg-white/50 backdrop-blur-xl border border-accent/40 hover:bg-white/60 hover:border-accent/60 hover:scale-105 hover:-translate-y-0.5 hover:shadow-soft-pastel',
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
