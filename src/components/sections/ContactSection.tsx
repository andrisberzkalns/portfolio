import { useEffect, useState } from 'react'
import SectionDivider from './SectionDivider'
import { Check, Copy, Mail, MessageCircle } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedDiscord, setCopiedDiscord] = useState(false)

  useEffect(() => {
    if (!copiedEmail && !copiedDiscord) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setCopiedEmail(false)
      setCopiedDiscord(false)
    }, 1500)

    return () => window.clearTimeout(timeoutId)
  }, [copiedEmail, copiedDiscord])

  const handleCopy = async (value: string, target: 'email' | 'discord') => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = value
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      if (target === 'email') {
        setCopiedEmail(true)
      } else {
        setCopiedDiscord(true)
      }
    } catch {
      // Ignore clipboard failures silently
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 py-52 text-white scroll-mt-24"
    >
      <SectionDivider
        fill="#ffffff"
        flip
        className="absolute left-0 top-0 z-20"
      />
      <div
        className="absolute inset-0 z-0 bg-slate-950/60"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <img
          src="/profile-color.webp"
          alt="Andris Berzkalns"
          className="h-24 w-24 rounded-full border border-white/30 object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">Contact me</h2>
          <p className="mt-3 text-white/70">
            Reach out anytime for collaboration, freelance, or questions.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Based in {portfolioData.contact.location}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="inline-flex overflow-hidden rounded-full border border-white/30 bg-white/10">
            <a
              href="mailto:andris@berzkalns.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <button
              type="button"
              onClick={() => handleCopy(portfolioData.contact.email, 'email')}
              className="inline-flex items-center border-l border-white/20 px-4 py-3 text-xs font-semibold text-white transition hover:bg-white/20 hover:text-white hover:cursor-pointer"
              aria-label="Copy email address"
              title="Copy email"
            >
              {copiedEmail ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <div className="inline-flex overflow-hidden rounded-full border border-white/30 bg-white/10">
            <a
              href="https://discord.com/users/andris97"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
            <button
              type="button"
              onClick={() => handleCopy('andris97', 'discord')}
              className="inline-flex items-center border-l border-white/20 px-4 py-3 text-xs font-semibold text-white transition hover:bg-white/20 hover:text-white hover:cursor-pointer"
              aria-label="Copy Discord username"
              title="Copy Discord username"
            >
              {copiedDiscord ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
      <SectionDivider
        fill="#000000"
        className="absolute bottom-0 left-0 z-20"
      />
    </section>
  )
}
