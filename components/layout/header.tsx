import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/navigation'

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="page-container pt-4">
        <header className="glass-card-vibrant rounded-b-3xl px-4 py-3 border border-accent/30 shadow-soft-pastel\">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Harviera" className="h-8 w-8" />
              <span className="font-medium">Harviera</span>
            </Link>
            <nav className="hidden md:flex gap-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 bg-white/40 backdrop-blur-xl hover:bg-white/55 transition ease-soft"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="md:hidden">
              <Link href="/contact" className="rounded-2xl px-3 py-2 bg-white/40 backdrop-blur-xl text-sm">
                Contact
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
