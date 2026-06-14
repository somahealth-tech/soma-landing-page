import Image from 'next/image'
import { FileText, Share2, ShieldCheck, FolderOpen, Layers, Plug, Stethoscope, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HeroWordmark } from '@/components/hero-wordmark'
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

// Per aggiungere una foto: salva l'immagine in /public/team/ e imposta
// `photo: '/team/nome-file.jpg'`. Senza foto, viene mostrata l'iniziale.
type TeamMember = { name: string; role: string; photo?: string }

const team: TeamMember[] = [
  { name: 'Simona Obino', role: 'Specializzanda Medicina di Base\nMaster Medicina Estetica\nEsperienza clinica internazionale', photo: '/team/Simo.jpg' },
  { name: 'Matteo Lai', role: 'Ingegnere biomedico con\nPh.D. in Health and Technologies', photo: '/team/Matte.jpg' },
  { name: 'Maria Elena Lasiu', role: 'Ricercatrice UX con 3+ esperienza in\nconsulenza e sviluppo prodotto\nLSE • Università Bocconi', photo: '/team/Mari.jpg' },
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
              <HeroWordmark />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                La tua salute, tutta in un posto. SOMA Health organizza la tua documentazione clinica
                e la rende condivisibile con i tuoi medici — in modo sicuro, semplice e immediato.
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

        {/* Chi siamo */}
        <section id="team" className="bg-[var(--color-offwhite)] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-serif text-4xl text-foreground">Chi siamo</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={0.1 * (i + 1)}>
                  <div className="h-full rounded-xl bg-card p-8 text-center shadow-[var(--shadow-card)]">
                    <div className="mx-auto size-24 overflow-hidden rounded-full bg-[var(--color-navy)]">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={`Foto di ${member.name}`}
                          width={96}
                          height={96}
                          className="size-full object-cover"
                        />
                      ) : (
                        <span className="flex size-full items-center justify-center font-serif text-2xl text-[var(--color-offwhite)]">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      )}
                    </div>
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
                Vuoi essere tra i primi a usare SOMA Health? Non perderti la sua versione Beta e contattaci
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
