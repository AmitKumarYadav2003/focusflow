# DECISIONS.md — FocusFlow Landing Page

## Track chosen: Part 2 — The Premium Home Page

## 1. Why this approach — and what I rejected

I picked FocusFlow — an AI study planner — as the product because I wanted a
concept I could write believable copy for, rather than picking a generic SaaS
placeholder and filling in filler text. As a CS student myself, I know exactly
what a syllabus-to-schedule tool needs to promise, and what it shouldn't
overclaim.

I rejected the "stitch a few component-library blocks together and call it
done" route, because that's the fastest way to end up with a page that's
technically responsive but visually forgettable — every AI-generated landing
page looks the same when you skip this step. Instead I treated the first
generated pass as a rough skeleton and spent most of my time on a second pass:
fixing the color system (the first version was flat monochrome grey, which
reads as "generated," not "designed"), fixing typography (the default system
font read as unfinished), and fixing spacing so the page had an actual visual
point of view instead of untouched defaults.

## 2. One trade-off I made under the time limit, and what I'd do with a real week

I scoped this to a single, tight page — hero, one product-showcase section
(a weekly schedule card), and a features section — and skipped pricing, FAQ,
and a full footer nav, because a shallow version of five sections looked worse
than a considered version of three. That was the right call given the time I
had, but I'd reverse it with a full week: add a real pricing section, a short
interactive demo of the schedule actually re-adjusting (the core product
hook), and run a proper accessibility and performance pass (contrast ratios,
Lighthouse score, image weight) instead of trusting generator defaults.

## 3. Where I used AI tools, and what I personally verified or changed afterward

I used v0 (Vercel) as a scaffolding tool, not an autopilot. AI use was
explicitly allowed and expected — what matters is whether I can defend every
decision, so here's exactly where I stepped in:

- **The first pass was rejected outright.** The initial generation was
  functionally fine but visually generic — flat dark grey theme, default font,
  a cramped weekly-schedule card. I didn't ship it. I rewrote the direction
  with a specific design brief: a "focus glow" concept — a warm amber accent
  against a deep indigo background, one distinct color per subject block,
  glass-panel card styling — because a study app should feel calm and warm,
  not like a corporate dashboard.
- **I caught and fixed an AI regression myself.** A later typography pass
  over-corrected the headline's letter-spacing into negative tracking, which
  made the letters visually overlap. I noticed it on review, wrote a targeted
  follow-up to fix it, and re-checked the result before moving on — exactly
  the kind of output I would not have shipped without checking.
- **What I verified manually before calling this done:** the page renders
  cleanly at 390px mobile and 1440px desktop with no horizontal scroll, dark
  mode applies consistently across every section (not just the hero), and the
  copy contains no fabricated testimonials, user counts, or logos — every line
  describing the product is something I wrote or deliberately approved.

I can walk through the component structure, the color decisions, and why each
section is built the way it is, in the follow-up conversation.
