import { FileText, Share2, ShieldCheck, FolderOpen, Layers, Plug, Stethoscope, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WaitlistForm } from '@/components/waitlist-form'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const patients = [
  { icon: FolderOpen, text: 'Tieni tutti i tuoi referti in un posto solo' },
  { icon: Share2, text: 'Condividi la tua storia clinica con qualsiasi medico' },
  { icon: ShieldCheck, text: 'Niente più fogli persi o esami da rifare' },
]

const clinicians = [
  { icon: FileText, text: 'Ricevi la documentazione del paziente prima della visita' },
  { icon: Layers, text: 'Storico clinico strutturato, non un PDF da scorrere' },
  { icon: Plug, text: 'Integrazione con i tuoi strumenti esistenti' },
]

const team = [
  { name: 'Simona Obino', role: 'Medico, co-fondatrice' },
  { name: 'Matteo Lai', role: 'Ingegnere biomedico, PhD, co-fondatore' },
  { name: 'Maria Elena Lasiu', role: 'Product & UX, co-fondatrice' },
]

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="font-serif text-5xl leading-tight text-balance text-foreground sm:text-6xl">
                La tua salute, tutta in un posto.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                SOMA Health organizza la tua documentazione clinica e la rende condivisibile con i
                tuoi medici — in modo sicuro, semplice e immediato.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-col items-center">
              <WaitlistForm id="email-hero" />
              <p className="mt-4 text-sm text-muted-foreground">
                Attualmente in fase di sviluppo · accesso su invito
              </p>
            </Reveal>
          </div>
        </section>

        {/* Il problema */}
        <section id="problema" className="bg-[var(--color-navy)] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-seafoam)]">
                Il problema
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 font-serif text-3xl leading-snug text-balance text-[var(--color-offwhite)] sm:text-4xl">
                Referti in email, esami su CD, visite scritte a mano.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-offwhite)]/75 text-pretty">
                Ogni volta che cambi medico o fai una visita specialistica, ricomincia da capo. SOMA
                Health nasce per risolvere questo: un&apos;unica piattaforma dove paziente e medico
                parlano la stessa lingua clinica.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Per chi */}
        <section id="per-chi" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-serif text-4xl text-foreground">Per chi</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="h-full rounded-xl bg-card p-8 shadow-[var(--shadow-card)]">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                    <Stethoscope className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-foreground">Pazienti</h3>
                  <ul className="mt-6 flex flex-col gap-4">
                    {patients.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <Icon className="mt-0.5 size-5 shrink-0 text-[var(--color-seafoam)]" aria-hidden="true" />
                        <span className="leading-relaxed text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="h-full rounded-xl bg-card p-8 shadow-[var(--shadow-card)]">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                    <Building2 className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-foreground">Medici e cliniche</h3>
                  <ul className="mt-6 flex flex-col gap-4">
                    {clinicians.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <Icon className="mt-0.5 size-5 shrink-0 text-[var(--color-seafoam)]" aria-hidden="true" />
                        <span className="leading-relaxed text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-[var(--color-offwhite)] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-serif text-4xl text-foreground">Il team</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={0.1 * (i + 1)}>
                  <div className="h-full rounded-xl bg-card p-8 text-center shadow-[var(--shadow-card)]">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--color-navy)] font-serif text-xl text-[var(--color-offwhite)]">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section id="waitlist" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
                Vuoi essere tra i primi a usare SOMA Health?
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 flex flex-col items-center">
              <WaitlistForm id="email-cta" />
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
                Sei un medico, un investitore o un partner? Scrivici a{' '}
                <a
                  href="mailto:somahealth.team@gmail.com"
                  className="font-medium text-[var(--color-teal)] underline-offset-2 hover:underline"
                >
                  somahealth.team@gmail.com
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
