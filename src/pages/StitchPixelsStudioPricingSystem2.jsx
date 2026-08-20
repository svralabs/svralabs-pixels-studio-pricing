import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StitchPixelsStudioPricingSystem2() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
<div className="max-w-max-width mx-auto flex justify-between items-center px-lg py-md">

<div className="font-h2 text-[1.5rem] tracking-tighter text-primary">
                PIXELS STUDIO
            </div>

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

<section className="max-w-max-width mx-auto px-lg mt-xl mb-xl">

<div className="relative w-full h-[204px] overflow-hidden opacity-30 mb-md">

</div>

<div className="inline-block relative mb-md">
<div className="dotted-border px-sm py-xs font-label-sm text-label-sm uppercase tracking-widest text-primary">
                    SERVICES
                </div>

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

<section className="max-w-max-width mx-auto px-lg pb-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

<div className="bg-surface rounded-[24px] p-lg relative dotted-border transition-all duration-300 hover:border-white/40 group">

<div className="corner-tick tick-tl"></div>
<div className="corner-tick tick-tr"></div>
<div className="corner-tick tick-bl"></div>
<div className="corner-tick tick-br"></div>
<div className="flex flex-col h-full">
<div className="mb-lg">
<h3 className="font-h2 text-[2rem] text-primary mb-sm">2-week design sprint</h3>
<p className="font-body-md text-secondary max-w-md">
                                One focused build. A landing page, dashboard, brand starter, or up to 8 mobile screens.
                            </p>
</div>
<div className="mb-xl">
<div className="flex items-baseline gap-xs">
<span className="font-h1 text-[3rem] text-primary">$2,500</span>
<span className="font-label-sm text-secondary uppercase tracking-widest">(One-time)</span>
</div>
</div>
<div className="flex-grow">
<ul className="space-y-md">
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Landing page that converts</span>
</li>
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Dashboard built for daily use</span>
</li>
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Mobile app (up to 8 screens)</span>
</li>
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Pitch deck to win the round</span>
</li>
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

<div className="bg-surface rounded-[24px] p-lg relative dotted-border transition-all duration-300 hover:border-white/40 group">

<div className="corner-tick tick-tl"></div>
<div className="corner-tick tick-tr"></div>
<div className="corner-tick tick-bl"></div>
<div className="corner-tick tick-br"></div>
<div className="flex flex-col h-full">
<div className="mb-lg">
<h3 className="font-h2 text-[2rem] text-primary mb-sm">Ongoing partnership</h3>
<p className="font-body-md text-secondary max-w-md">
                                A dedicated design team. Unlimited output. Design, strategy, and no-code delivery — on retainer.
                            </p>
</div>
<div className="mb-xl">
<div className="flex items-baseline gap-xs">
<span className="font-h1 text-[3rem] text-primary">$5,000</span>
<span className="font-label-sm text-secondary uppercase tracking-widest">(/month)</span>
</div>
</div>
<div className="flex-grow">
<ul className="space-y-md">
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Work directly with the founder (no handoffs)</span>
</li>
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Unlimited design requests &amp; revisions</span>
</li>
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">48-hour turnarounds (weekdays)</span>
</li>
<li className="flex items-center gap-sm">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
<span className="font-body-md">Weekly strategy calls + Slack integration</span>
</li>
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
</div>
</section>

<section className="max-w-max-width mx-auto px-lg py-xl">
<div className="h-[300px] w-full rounded-[24px] overflow-hidden relative dotted-border">
<div className="absolute inset-0 bg-gradient-to-tr from-surface to-background z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-50 z-20">
<div className="text-center">
<div className="font-label-sm text-label-sm uppercase tracking-[0.4em] mb-sm text-secondary">CURATED DESIGN EXPERTISE</div>
<div className="w-24 h-[1px] bg-border mx-auto"></div>
</div>
</div>
<div className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" data-alt="A high-contrast, minimalist architectural detail shot in black and white. The image shows a sharp geometric corner of a modern concrete building against a dark midnight sky. Subtle atmospheric fog softens the edges. The aesthetic is clean, professional, and tech-forward, matching a premium design studio brand." style={{"backgroundImage": "url(https://lh3.googleusercontent.com/aida-public/AB6AXuC3yWrKTGZsfHWhdzY-snO2CIhAQ0IiDopnltsUIiA0hQ68qXmRwJbR-Qn3q0DfugVEksMkm7QPdWllowcBF4FvXg5v7t_6oqv7sqzJH-mHQEfTrdcRTyyDfe_2kolTgjL6enqeGiTGc7Kg-pm7E_dl5Pi7-XchzPB64oOWOQqEX1Cx2v123pht1XqKlC4tNicSh0nDpDje37lpMJhm6kHqcaXfT1Q-J-sEd60njKa76OcA6Ew-nHQf)"}}></div>
</div>
</section>
</main>

<footer className="w-full px-lg py-xl flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto border-t border-border">
<div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-md md:mb-0">
            © 2026 PIXELS STUDIO. ALL RIGHTS RESERVED.
        </div>
<div className="flex gap-lg">
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300" href="#">INSTAGRAM</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300" href="#">LINKEDIN</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300" href="#">TWITTER</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300" href="#">DRIBBBLE</a>
</div>
</footer>


    </div>
  );
}
