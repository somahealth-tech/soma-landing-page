import Image from 'next/image'

export function HeroWordmark() {
  return (
    <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif leading-none text-foreground">
      <span className="sr-only">SOMA Health</span>
      <span aria-hidden="true" className="flex items-center text-6xl sm:text-7xl lg:text-8xl">
        <span>S</span>
        <Image
          src="/soma-logo-mark.svg"
          alt=""
          width={100}
          height={100}
          aria-hidden="true"
          className="mx-0.5 inline-block size-[0.82em] translate-y-[0.02em]"
        />
        <span>MA</span>
      </span>
      <span aria-hidden="true" className="text-6xl text-[var(--color-teal)] sm:text-7xl lg:text-8xl">
        Health
      </span>
    </h1>
  )
}
