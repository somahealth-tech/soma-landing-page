'use client'

import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--color-navy)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center" aria-label="SOMA Health — home">
          <Image
            src="/soma-wordmark-dark.svg"
            alt="SOMA Health"
            width={140}
            height={26}
            priority
            className="h-6 w-auto"
          />
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-[var(--color-offwhite)]/80">
          <a href="#problema" className="hidden transition hover:text-[var(--color-offwhite)] sm:inline">
            Il problema
          </a>
          <a href="#per-chi" className="hidden transition hover:text-[var(--color-offwhite)] sm:inline">
            Per chi
          </a>
          <a href="#team" className="hidden transition hover:text-[var(--color-offwhite)] sm:inline">
            Chi siamo
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-[var(--color-teal)] px-4 py-2 font-semibold text-[var(--color-offwhite)] transition hover:bg-[#016b78]"
          >
            Accesso anticipato
          </a>
        </nav>
      </div>
    </header>
  )
}
