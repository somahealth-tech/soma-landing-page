import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — SOMA Health',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-16">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-teal)]">
              Informativa sulla privacy
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Informativa sul trattamento dei dati personali
            </h1>
            <p className="mt-4 text-base text-muted-foreground">
              ai sensi degli artt. 13–14 del Regolamento UE 2016/679 — GDPR
            </p>

            <div className="mt-16 flex flex-col gap-12">
              <div>
                <h2 className="font-serif text-2xl text-foreground">Titolare del trattamento</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Matteo Lai, in qualità di responsabile del progetto SOMA Health
                  <br />
                  Email:{' '}
                  <a
                    href="mailto:somahealth.team@gmail.com"
                    className="font-medium text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    somahealth.team@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">Quali dati raccogliamo</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Attraverso il modulo di iscrizione alla waitlist presente su questo sito raccogliamo
                  esclusivamente il tuo indirizzo email.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">Perché raccogliamo i tuoi dati</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Il tuo indirizzo email viene utilizzato per:
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
                  {[
                    'Tenerti informato sullo sviluppo di SOMA Health',
                    'Contattarti quando il servizio sarà disponibile in accesso anticipato',
                    'Rispondere a eventuali richieste di informazioni o demo',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-seafoam)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">Base giuridica</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Il trattamento è basato sul tuo consenso esplicito, espresso al momento
                  dell&apos;iscrizione alla waitlist (art. 6, par. 1, lett. a GDPR). Puoi revocare il
                  consenso in qualsiasi momento scrivendo a{' '}
                  <a
                    href="mailto:somahealth.team@gmail.com"
                    className="font-medium text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    somahealth.team@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">
                  Per quanto tempo conserviamo i dati
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Il tuo indirizzo email viene conservato fino alla tua richiesta di cancellazione, o
                  fino alla chiusura del progetto SOMA Health, e comunque non oltre 24 mesi dalla
                  raccolta.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">Con chi condividiamo i dati</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  I dati raccolti tramite il modulo di iscrizione sono trasmessi a{' '}
                  <strong className="font-medium text-foreground">Formspree Inc.</strong>{' '}
                  (formspree.io), fornitore del servizio di gestione form, che agisce in qualità di
                  responsabile del trattamento. Formspree tratta i dati in conformità al GDPR. Per
                  maggiori informazioni:{' '}
                  <a
                    href="https://formspree.io/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    formspree.io/legal/privacy-policy
                  </a>
                  .
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  I tuoi dati non vengono venduti, ceduti o comunicati a terzi per finalità di
                  marketing.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">I tuoi diritti</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Ai sensi del GDPR hai diritto di:
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
                  {[
                    'Accedere ai tuoi dati personali',
                    'Chiederne la rettifica o la cancellazione',
                    'Opporti al trattamento',
                    'Richiedere la portabilità dei dati',
                    'Revocare il consenso in qualsiasi momento',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-seafoam)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Per esercitare questi diritti scrivi a:{' '}
                  <a
                    href="mailto:somahealth.team@gmail.com"
                    className="font-medium text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    somahealth.team@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground">Trasferimenti internazionali</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Formspree è una società statunitense. Il trasferimento dei dati avviene in
                  conformità alle garanzie previste dal GDPR (Standard Contractual Clauses).
                </p>
              </div>

              <p className="border-t border-border pt-8 text-sm text-muted-foreground">
                Ultimo aggiornamento: giugno 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
