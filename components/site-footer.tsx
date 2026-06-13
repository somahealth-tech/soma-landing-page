import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Image
          src="/soma-wordmark-dark.svg"
          alt="SOMA Health"
          width={150}
          height={28}
          className="h-7 w-auto"
        />
        <div className="flex flex-col gap-1 text-sm text-[var(--color-offwhite)]/70">
          <a
            href="mailto:somahealth.team@gmail.com"
            className="transition hover:text-[var(--color-offwhite)]"
          >
            somahealth.team@gmail.com
          </a>
          <p>© {new Date().getFullYear()} SOMA Health. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
