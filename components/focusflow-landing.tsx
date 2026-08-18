'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Brain, Check, Clock3, Menu, Moon, Sparkles, Sun, Target, X } from 'lucide-react'

const schedule = [
  { day: 'Mon', date: '14', items: [{ time: '4:00', subject: 'Biology', type: 'Lab review', color: 'blue' }, { time: '6:15', subject: 'Calculus', type: 'Problem set 4', color: 'violet' }] },
  { day: 'Tue', date: '15', items: [{ time: '4:30', subject: 'History', type: 'Chapter 8 notes', color: 'amber' }, { time: '7:00', subject: 'Biology', type: 'Flashcards', color: 'blue' }] },
  { day: 'Wed', date: '16', items: [{ time: '3:30', subject: 'Calculus', type: 'Practice quiz', color: 'violet' }, { time: '5:45', subject: 'Writing', type: 'Essay outline', color: 'rose' }] },
  { day: 'Thu', date: '17', items: [{ time: '4:00', subject: 'Biology', type: 'Read chapter 11', color: 'blue' }, { time: '6:30', subject: 'History', type: 'Study guide', color: 'amber' }] },
  { day: 'Fri', date: '18', items: [{ time: '3:00', subject: 'Calculus', type: 'Review session', color: 'violet' }, { time: '4:30', subject: 'Writing', type: 'Revise draft', color: 'rose' }] },
]

const colorClasses: Record<string, string> = { blue: 'bg-blue-500/10 text-blue-700 dark:text-blue-300', violet: 'bg-violet-500/10 text-violet-700 dark:text-violet-300', amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300', rose: 'bg-rose-500/10 text-rose-700 dark:text-rose-300' }

export function FocusFlowLanding() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [secretFound, setSecretFound] = useState(false)
  const secretSequence = useRef<string[]>([])

  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    const handleKeyDown = (event: KeyboardEvent) => {
      secretSequence.current = [...secretSequence.current, event.key].slice(-konamiCode.length)
      if (secretSequence.current.every((key, index) => key.toLowerCase() === konamiCode[index].toLowerCase())) {
        setSecretFound(true)
        secretSequence.current = []
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!secretFound) return
    const timeout = window.setTimeout(() => setSecretFound(false), 3000)
    return () => window.clearTimeout(timeout)
  }, [secretFound])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {secretFound && <div role="status" aria-live="polite" className="fixed inset-x-4 top-4 z-50 mx-auto max-w-md rounded-2xl border border-primary/20 bg-card px-4 py-3 text-center text-sm font-medium text-foreground shadow-xl shadow-primary/20 sm:inset-x-auto sm:right-6 sm:top-6"><span className="text-primary">You found the secret!</span> Here&apos;s 10% off your first month 🎉</div>}
      <header className="relative z-20 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight"><span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Brain className="size-4" /></span>FocusFlow</a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><a href="#product" className="transition-colors hover:text-foreground">Product</a><a href="#features" className="transition-colors hover:text-foreground">About</a><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></div>
          <div className="flex items-center gap-2"><button type="button" onClick={() => setDark(!dark)} className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button><button type="button" onClick={() => setMenuOpen(!menuOpen)} className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden" aria-label="Toggle menu">{menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button><a href="#start" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex">Get Started</a></div>
        </nav>
        {menuOpen && <div className="border-t border-border/60 px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm text-muted-foreground"><a href="#product" onClick={() => setMenuOpen(false)}>Product</a><a href="#features" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></div>}
      </header>

      <main id="top">
        <section className="relative isolate mx-auto max-w-6xl overflow-hidden px-5 pb-28 pt-20 text-center lg:px-8 lg:pb-36 lg:pt-32"><div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-primary/14 blur-3xl" /><div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-400/10 blur-[100px]" /><div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"><Sparkles className="size-3.5 text-primary" /> Built for the way you actually study</div><h1 className="mx-auto max-w-5xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem]">Your syllabus, turned into a plan <span className="text-primary">you&apos;ll actually follow.</span></h1><p className="mx-auto mt-7 max-w-xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">FocusFlow turns every deadline, reading, and exam into a calm daily rhythm that adapts with you — not against you.</p><div className="mt-9 flex justify-center"><a id="start" href="#product" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition duration-200 hover:scale-[1.03] hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]">Get Started Free <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></a></div></section>

        <section id="product" className="reveal mx-auto max-w-6xl px-5 pb-32 lg:px-8"><div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_24px_80px_-24px] shadow-primary/30 ring-1 ring-foreground/[0.03]"><div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7"><div><p className="text-sm font-semibold">Your week, in focus</p><p className="mt-1 text-xs text-muted-foreground">October 14 – 18 · 12h 30m planned</p></div><div className="hidden items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:flex"><Target className="size-3.5" /> 68% on track</div></div><div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-5 sm:divide-x sm:divide-y-0">{schedule.map((column) => <div key={column.day} className="min-w-0 p-4 sm:p-5"><div className="mb-4 flex items-baseline justify-between"><span className="text-sm font-semibold">{column.day}</span><span className="font-mono text-xs text-muted-foreground">{column.date}</span></div><div className="space-y-3">{column.items.map((item) => <div key={item.time + item.subject} className={`rounded-2xl p-3 ${colorClasses[item.color]}`}><div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide opacity-70"><Clock3 className="size-3" /> {item.time} PM</div><p className="mt-2 text-xs font-semibold">{item.subject}</p><p className="mt-0.5 text-[11px] opacity-75">{item.type}</p></div>)}</div></div>)}</div><div className="border-t border-border bg-muted/30 px-5 py-5 sm:px-7"><div className="flex items-center justify-between text-xs"><span className="font-medium">Weekly progress</span><span className="text-muted-foreground">8 of 12 sessions complete</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-border"><div className="h-full w-2/3 rounded-full bg-primary" /></div></div></div></section>

        <section id="features" className="reveal mx-auto max-w-6xl px-5 pb-36 lg:px-8"><div className="mb-10 max-w-xl"><p className="mb-3 text-sm font-semibold text-primary">Less planning. More progress.</p><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">A better way to keep momentum.</h2><p className="mt-4 leading-7 text-muted-foreground">FocusFlow handles the moving pieces, so you can give your attention to the one thing in front of you.</p></div><div className="grid gap-4 md:grid-cols-3"><Feature icon={<Sparkles />} title="Auto-adjusting schedule" copy="Fall behind on a reading? FocusFlow reshuffles your week without creating a stressful catch-up pile." /><Feature icon={<Target />} title="Exam countdown tracking" copy="See exactly what needs attention before exam day, with pacing that gets smarter as the date gets closer." /><Feature icon={<Clock3 />} title="Focus session timer" copy="Start a focused block with a clear finish line, gentle breaks, and no distracting setup." /></div></section>

        <section id="contact" className="reveal mx-auto max-w-6xl px-5 pb-24 lg:px-8"><div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Make room for the work that matters.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-primary-foreground/75">Start with your syllabus. Leave with a plan that knows how to keep up.</p><a href="#start" className="mt-7 inline-flex rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:opacity-90">Get Started Free</a></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-2 font-semibold text-foreground"><span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Brain className="size-3.5" /></span>FocusFlow</div><div className="flex gap-5"><a href="#product" className="hover:text-foreground">Product</a><a href="#features" className="hover:text-foreground">About</a><a href="#contact" className="hover:text-foreground">Contact</a></div><p className="text-xs">© 2026 FocusFlow</p></div></footer>
    </div>
  )
}

function Feature({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) { return <article className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"><div className="mb-8 flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">{icon}</div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p><div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary"><Check className="size-3.5" /> Built into every plan</div></article> }

export default FocusFlowLanding
