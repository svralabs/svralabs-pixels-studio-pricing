import React from 'react';

const pricingTiers = [
  {
    title: '2-week design sprint',
    description: 'One focused build. A landing page, dashboard, brand starter, or up to 8 mobile screens.',
    price: '$2,500',
    priceType: '(One-time)',
    features: [
      'Landing page that converts',
      'Dashboard built for daily use',
      'Mobile app (up to 8 screens)',
      'Pitch deck to win the round'
    ]
  },
  {
    title: 'Ongoing partnership',
    description: 'A dedicated design team. Unlimited output. Design, strategy, and no-code delivery — on retainer.',
    price: '$5,000',
    priceType: '(/month)',
    features: [
      'Work directly with the founder (no handoffs)',
      'Unlimited design requests & revisions',
      '48-hour turnarounds (weekdays)',
      'Weekly strategy calls + Slack integration'
    ]
  }
];

export default function PricingSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-max-width mx-auto flex justify-between items-center px-lg py-md">
          {/* Brand Logo */}
          <div className="font-h2 text-[1.5rem] tracking-tighter text-primary">
            PIXELS STUDIO
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-md">
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">WORK</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold" href="#">SERVICES</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">INFORMATION</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">CONTACT</a>
          </div>
          {/* Trailing Actions */}
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
          <div className="relative w-full h-[204px] overflow-hidden opacity-30 mb-md"></div>
          {/* Section Label */}
          <div className="inline-block relative mb-md">
            <div className="dotted-border px-sm py-xs font-label-sm text-label-sm uppercase tracking-widest text-primary">
              SERVICES
            </div>
            {/* Crosshair markers */}
            <div className="absolute -top-1 -left-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
          </div>
          <h1 className="font-h1 text-h1 max-w-4xl leading-tight">
            A sprint to ship one thing well, or a retainer for everything after.
          </h1>
        </section>

        {/* Pricing Grid */}
        <section className="max-w-max-width mx-auto px-lg pb-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-surface rounded-[24px] p-lg relative dotted-border transition-all duration-300 hover:border-white/40 group">
                {/* Corner Ticks */}
                <div className="corner-tick tick-tl"></div>
                <div className="corner-tick tick-tr"></div>
                <div className="corner-tick tick-bl"></div>
                <div className="corner-tick tick-br"></div>
                <div className="flex flex-col h-full">
                  <div className="mb-lg">
                    <h3 className="font-h2 text-[2rem] text-primary mb-sm">{tier.title}</h3>
                    <p className="font-body-md text-secondary max-w-md">
                      {tier.description}
                    </p>
                  </div>
                  <div className="mb-xl">
                    <div className="flex items-baseline gap-xs">
                      <span className="font-h1 text-[3rem] text-primary">{tier.price}</span>
                      <span className="font-label-sm text-secondary uppercase tracking-widest">{tier.priceType}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-md">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span className="font-body-md">{feature}</span>
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
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
