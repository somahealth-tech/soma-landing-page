'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'

export function WaitlistForm({ id }: { id?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xpqeoodn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-seafoam)]/40 bg-[var(--color-seafoam)]/10 px-4 py-4"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-seafoam)] text-white">
              <Check className="size-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-foreground">
              Grazie! Ti contatteremo presto.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor={id ?? 'email'} className="sr-only">
              Indirizzo email
            </label>
            <input
              id={id ?? 'email'}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="h-12 flex-1 rounded-full border border-input bg-card px-5 text-base text-foreground shadow-[var(--shadow-card)] outline-none transition focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-teal)] px-6 text-base font-semibold text-[var(--color-offwhite)] shadow-[var(--shadow-card)] transition hover:bg-[#016b78] disabled:opacity-70"
            >
              {status === 'loading' && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
              Iscriviti per l&apos;accesso anticipato
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === 'error' && (
        <p className="mt-2 text-sm text-[#c0392b]">
          Qualcosa è andato storto. Riprova tra poco.
        </p>
      )}
    </div>
  )
}
