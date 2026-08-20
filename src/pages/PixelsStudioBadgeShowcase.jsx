import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudioBadgeShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-background text-primary font-label-sm text-label-sm tracking-widest uppercase full-width top-0 sticky border-b border-border z-50">
<div className="flex justify-between items-center w-full px-sm md:px-md py-xs max-w-[1440px] mx-auto">
<a className="font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tighter font-black text-primary" href="#">PIXELS STUDIO</a>
<nav className="hidden md:flex gap-md items-center">
<a className="text-secondary hover:text-primary transition-colors duration-200" href="#">WORK</a>
<a className="text-secondary hover:text-primary transition-colors duration-200" href="#">SERVICES</a>
<a className="text-primary border-b border-primary pb-1" href="#">INFORMATION</a>
<a className="text-secondary hover:text-primary transition-colors duration-200" href="#">CONTACT</a>
</nav>
<button className="bg-primary text-background px-md py-xs rounded-full font-label-sm hover:opacity-80 transition-opacity active:scale-95 duration-100">
                GET STARTED
            </button>
</div>
</header>
<main className="max-w-[1440px] mx-auto px-sm md:px-md py-xl space-y-xl">

<section className="max-w-3xl">
<h1 className="font-h1 text-h1 text-primary mb-md">BADGE<br/>SHOWCASE</h1>
<p className="font-body-md text-body-md text-on-secondary-container max-w-xl">
                A definitive collection of status indicators, categorical labels, and technical markers designed for high-density professional interfaces.
            </p>
</section>

<section className="border-t border-border pt-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg items-start">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-sm">01 / Status Badges</span>
</div>
<div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-md">

<div className="flex flex-col gap-xs items-start">
<div className="flex items-center gap-xs px-sm py-xs bg-primary text-background rounded-full font-label-sm">
<span className="w-1.5 h-1.5 bg-background rounded-full animate-pulse"></span>
                            ACTIVE
                        </div>
<span className="text-[10px] text-on-secondary-container uppercase">Solid Treatment</span>
</div>

<div className="flex flex-col gap-xs items-start">
<div className="flex items-center gap-xs px-sm py-xs border border-primary text-primary rounded-full font-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
                            SUCCESS
                        </div>
<span className="text-[10px] text-on-secondary-container uppercase">Outline Treatment</span>
</div>

<div className="flex flex-col gap-xs items-start">
<div className="flex items-center gap-xs px-sm py-xs border border-border text-secondary rounded-full font-label-sm italic">
<span className="w-1 h-1 bg-secondary rounded-full"></span>
                            PENDING
                        </div>
<span className="text-[10px] text-on-secondary-container uppercase">Low Contrast</span>
</div>

<div className="flex flex-col gap-xs items-start">
<div className="flex items-center gap-xs px-sm py-xs border-b-2 border-primary text-primary font-label-sm rounded-none">
<span className="material-symbols-outlined text-[14px]">error</span>
                            ERROR_SYS
                        </div>
<span className="text-[10px] text-on-secondary-container uppercase">Geometric Signal</span>
</div>
</div>
</div>
</section>

<section className="border-t border-border pt-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-sm">02 / Categories</span>
</div>
<div className="md:col-span-3 flex flex-wrap gap-sm">
<div className="px-md py-xs bg-surface border border-border text-primary font-label-sm rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                        DEVELOPMENT
                    </div>
<div className="px-md py-xs bg-surface border border-border text-primary font-label-sm rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                        DESIGN
                    </div>
<div className="px-md py-xs bg-surface border border-border text-primary font-label-sm rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                        STRATEGY
                    </div>
<div className="px-md py-xs bg-surface border border-border text-primary font-label-sm rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                        IDENTITY
                    </div>
<div className="px-md py-xs bg-surface border border-border text-primary font-label-sm rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                        MOTION
                    </div>
</div>
</div>
</section>

<section className="border-t border-border pt-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-sm">03 / Notifications</span>
</div>
<div className="md:col-span-3 flex items-center gap-xl">
<div className="relative inline-flex">
<span className="material-symbols-outlined text-primary text-4xl">mail</span>
<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-background text-[10px] font-tabular font-bold">12</span>
</div>
<div className="relative inline-flex">
<span className="material-symbols-outlined text-primary text-4xl">notifications</span>
<span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-primary ring-2 ring-background"></span>
</div>
<div className="flex items-center gap-md p-md bg-surface border border-border rounded-xl">
<span className="font-label-sm text-secondary uppercase">MESSAGES</span>
<span className="px-xs py-[2px] bg-primary text-background font-tabular text-[11px] font-bold rounded-sm">05</span>
</div>
</div>
</div>
</section>

<section className="border-t border-border pt-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-sm">04 / Technical Specs</span>
</div>
<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-md">

<div className="p-lg bg-surface border-dashed-custom border-border flex items-center justify-between corner-tick">
<span className="font-label-sm text-on-secondary-container">REF_ID</span>
<span className="font-tabular text-primary font-bold tracking-widest uppercase">PX_9921_01</span>
</div>

<div className="p-lg bg-surface border-dashed-custom border-border flex items-center justify-between">
<span className="font-label-sm text-on-secondary-container">VERSION</span>
<span className="px-sm py-1 bg-on-secondary text-background font-tabular text-xs font-bold rounded-sm">V2.4.0</span>
</div>

<div className="p-lg bg-surface border-dashed-custom border-border flex flex-col gap-xs">
<span className="font-label-sm text-on-secondary-container">BUILD_HASH</span>
<span className="font-tabular text-primary text-xs truncate uppercase opacity-50">7A12F_88_XC_02</span>
</div>
</div>
</div>
</section>

<section className="border-t border-border pt-lg pb-xl">
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-sm">05 / Sizes & Geometry</span>
</div>
<div className="md:col-span-3 space-y-lg">
<div className="flex flex-col gap-md">
<p className="text-xs text-secondary uppercase tracking-widest">Radius Comparison</p>
<div className="flex gap-md items-center">
<span className="px-lg py-xs bg-primary text-background font-label-sm rounded-full">PILL RADIUS (9999PX)</span>
<span className="px-lg py-xs bg-primary text-background font-label-sm rounded-none">SHARP CORNER (0PX)</span>
<span className="px-lg py-xs bg-primary text-background font-label-sm rounded-md">SOFT CORNER (8PX)</span>
</div>
</div>
<div className="flex flex-col gap-md pt-md">
<p className="text-xs text-secondary uppercase tracking-widest">Scale Comparison</p>
<div className="flex gap-md items-end">
<div className="flex flex-col gap-xs">
<span className="px-sm py-0.5 bg-surface border border-border text-on-surface text-[10px] font-bold uppercase tracking-tighter">SMALL</span>
<span className="text-[9px] text-on-secondary-container text-center">Label SM</span>
</div>
<div className="flex flex-col gap-xs">
<span className="px-lg py-xs bg-surface border border-border text-on-surface text-label-sm font-bold uppercase tracking-tighter">MEDIUM</span>
<span className="text-[9px] text-on-secondary-container text-center">Body MD</span>
</div>
<div className="flex flex-col gap-xs">
<span className="px-xl py-md bg-surface border border-border text-on-surface text-lg font-black uppercase tracking-tighter">LARGE</span>
<span className="text-[9px] text-on-secondary-container text-center">Display</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="bg-surface p-lg border border-border rounded-xl flex flex-col justify-between h-[300px]">
<div>
<div className="inline-flex px-sm py-1 bg-on-secondary-container text-background text-[10px] font-bold mb-md">PROJECT_ALPHA</div>
<h3 className="font-h2 text-h2 text-primary leading-tight">Identity<br/>Audit.</h3>
</div>
<div className="flex justify-between items-center">
<span className="text-secondary font-label-sm">2024</span>
<span className="px-md py-xs border border-primary text-primary rounded-full text-[10px]">VERIFIED</span>
</div>
</div>
<div className="md:col-span-2 bg-surface border border-border rounded-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-transform duration-700 group-hover:scale-105" data-alt="A macro close-up of a high-tech mechanical component with sharp edges and glowing status indicators. The aesthetic is deep black and surgical white, with a focus on precision engineering and minimalist tech design. The lighting is dramatic and directional, casting long shadows." style={{"backgroundImage": "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCWpie2JgEEvqJlo8i6SGhS3b4HEoR8_-Mo-5Eom1Yb1cqNJNnDkEcOuJbD6HOTy0kXWmYUu9pOJY6dGZ3XcXb6gmOV_ANxK8LQPIzT4WGFzax_vWwsbd_b1SSgWfJW82aeHMKZazo0ikA8H2ram3z11Lx399gwpSjTjW2i-FQHz6vi9cByJWLPCfVjssxlYXCRcKNsUF-KnPoaob2dL7dcKAASIexsktrxtnf3kXvVpG6dGQYI39Z5)"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
<div className="relative p-lg h-full flex flex-col justify-end">
<div className="flex gap-sm mb-sm">
<span className="px-sm py-0.5 border border-primary bg-primary text-background font-label-sm">NEW</span>
<span className="px-sm py-0.5 border border-primary text-primary font-label-sm">SYSTEM_UPDATE</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary max-w-lg">Next-gen asset management.</h2>
</div>
</div>
</section>
</main>

<footer className="bg-background text-primary font-label-sm text-label-sm uppercase tracking-wider full-width bottom-0 border-t border-border">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-sm md:px-md py-md max-w-[1440px] mx-auto gap-sm">
<div className="font-headline-xl text-headline-xl tracking-tighter text-primary">PIXELS STUDIO</div>
<div className="flex flex-wrap justify-center gap-md">
<a className="text-on-secondary-container hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
<a className="text-on-secondary-container hover:text-primary transition-colors" href="#">TERMS OF SERVICE</a>
<a className="text-on-secondary-container hover:text-primary transition-colors" href="#">INSTAGRAM</a>
<a className="text-on-secondary-container hover:text-primary transition-colors" href="#">TWITTER</a>
</div>
<div className="text-on-secondary-container opacity-50">© 2024 PIXELS STUDIO. ALL RIGHTS RESERVED.</div>
</div>
</footer>


    </div>
  );
}
