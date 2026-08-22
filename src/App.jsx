import React, { useEffect, useRef } from 'react'

const ATMOS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3yWrKTGZsfHWhdzY-snO2CIhAQ0IiDopnltsUIiA0hQ68qXmRwJbR-Qn3q0DfugVEksMkm7QPdWllowcBF4FvXg5v7t_6oqv7sqzJH-mHQEfTrdcRTyyDfe_2kolTgjL6enqeGiTGc7Kg-pm7E_dl5Pi7-XchzPB64oOWOQqEX1Cx2v123pht1XqKlC4tNicSh0nDpDje37lpMJhm6kHqcaXfT1Q-J-sEd60njKa76OcA6Ew-nHQf'

function CornerTicks() {
  return (
    <>
      <div className="corner-tick tick-tl" />
      <div className="corner-tick tick-tr" />
      <div className="corner-tick tick-bl" />
      <div className="corner-tick tick-br" />
    </>
  )
}

function Crosshair({ className }) {
  return (
    <div className={`absolute w-2 h-2 flex items-center justify-center ${className}`}>
      <div className="w-full h-[1px] bg-primary absolute" />
      <div className="h-full w-[1px] bg-primary absolute" />
    </div>
  )
}

function PricingCard({ title, desc, price, priceSuffix, items }) {
  const ref = useRef(null)
  useEffect(() => {
    const card = ref.current
    if (!card) return
    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateX = (y - rect.height / 2) / 25
      const rotateY = (rect.width / 2 - x) / 25
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    const onLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
    }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])
  return (
    <div
      ref={ref}
      className="bg-surface rounded-[24px] p-lg relative dotted-border transition-all duration-300 hover:border-white/40 group"
    >
      <CornerTicks />
      <div className="flex flex-col h-full">
        <div className="mb-lg">
          <h3 className="font-h2 text-[2rem] text-primary mb-sm">{title}</h3>
          <p className="font-body-md text-secondary max-w-md">{desc}</p>
        </div>
        <div className="mb-xl">
          <div className="flex items-baseline gap-xs">
            <span className="font-h1 text-[3rem] text-primary">{price}</span>
            <span className="font-label-sm text-secondary uppercase tracking-widest">({priceSuffix})</span>
          </div>
        </div>
        <div className="flex-grow">
          <ul className="space-y-md">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="font-body-md">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-lg">
          <button className="w-full sm:w-auto bg-primary text-background font-label-sm py-sm px-lg rounded-full flex items-center justify-center gap-xs hover:opacity-90 transition-all active:scale-[0.98]">
            LET'S TALK
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const nav = navRef.current
      if (!nav) return
      if (window.scrollY > 20) {
        nav.classList.add('py-sm')
        nav.classList.remove('py-md')
      } else {
        nav.classList.add('py-md')
        nav.classList.remove('py-sm')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-background min-h-screen">
      {/* Top Navigation Bar */}
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-max-width mx-auto flex justify-between items-center px-lg py-md">
          <div className="font-h2 text-[1.5rem] tracking-tighter text-primary">PIXELS STUDIO</div>
          <div className="hidden md:flex items-center gap-md">
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">WORK</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold" href="#">SERVICES</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">INFORMATION</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">CONTACT</a>
          </div>
          <div className="flex items-center gap-sm">
            <a className="hidden sm:block font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">TWITTER</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">EMAIL</a>
          </div>
        </div>
      </nav>

      <main className="pt-xl">
        {/* Hero Section & Headline */}
        <section className="max-w-max-width mx-auto px-lg mt-xl mb-xl">
          {/* Animated Shader Background (Subtle Atmospheric Layer) */}
          <div className="relative w-full h-[204px] overflow-hidden opacity-30 mb-md" />
          {/* Section Label */}
          <div className="inline-block relative mb-md">
            <div className="dotted-border px-sm py-xs font-label-sm text-label-sm uppercase tracking-widest text-primary">
              SERVICES
            </div>
            <Crosshair className="-top-1 -left-1" />
            <Crosshair className="-top-1 -right-1" />
            <Crosshair className="-bottom-1 -left-1" />
            <Crosshair className="-bottom-1 -right-1" />
          </div>
          <h1 className="font-h1 text-h1 max-w-4xl leading-tight">
            A sprint to ship one thing well, or a retainer for everything after.
          </h1>
        </section>

        {/* Pricing Grid */}
        <section className="max-w-max-width mx-auto px-lg pb-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <PricingCard
              title="2-week design sprint"
              desc="One focused build. A landing page, dashboard, brand starter, or up to 8 mobile screens."
              price="$2,500"
              priceSuffix="One-time"
              items={[
                'Landing page that converts',
                'Dashboard built for daily use',
                'Mobile app (up to 8 screens)',
                'Pitch deck to win the round',
              ]}
            />
            <PricingCard
              title="Ongoing partnership"
              desc="A dedicated design team. Unlimited output. Design, strategy, and no-code delivery — on retainer."
              price="$5,000"
              priceSuffix="/month"
              items={[
                'Work directly with the founder (no handoffs)',
                'Unlimited design requests & revisions',
                '48-hour turnarounds (weekdays)',
                'Weekly strategy calls + Slack integration',
              ]}
            />
          </div>
        </section>

        {/* Minimal Atmospheric Visual Element */}
        <section className="max-w-max-width mx-auto px-lg py-xl">
          <div className="h-[300px] w-full rounded-[24px] overflow-hidden relative dotted-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-background z-10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-50 z-20">
              <div className="text-center">
                <div className="font-label-sm text-label-sm uppercase tracking-[0.4em] mb-sm text-secondary">
                  CURATED DESIGN EXPERTISE
                </div>
                <div className="w-24 h-[1px] bg-border mx-auto" />
              </div>
            </div>
            <div
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
              style={{ backgroundImage: `url('${ATMOS_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-lg py-xl flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto border-t border-border">
        <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-md md:mb-0">
          © 2026 PIXELS STUDIO. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-lg">
          {['INSTAGRAM', 'LINKEDIN', 'TWITTER', 'DRIBBBLE'].map((l) => (
            <a key={l} className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300" href="#">
              {l}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
