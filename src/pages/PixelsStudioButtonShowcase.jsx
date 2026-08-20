import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudioButtonShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 sticky bg-background dark:bg-background border-b border-border z-50">
<div className="flex justify-between items-center h-20 px-md max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary cursor-pointer active:opacity-70">
                PIXELS STUDIO
            </div>
<nav className="hidden md:flex items-center space-x-lg">
<a className="text-primary border-b border-primary pb-1 font-label-sm text-label-sm uppercase tracking-widest cursor-pointer hover:text-primary transition-colors duration-200" href="#">COMPONENTS</a>
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest cursor-pointer hover:text-primary transition-colors duration-200" href="#">GUIDELINES</a>
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest cursor-pointer hover:text-primary transition-colors duration-200" href="#">RESOURCES</a>
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest cursor-pointer hover:text-primary transition-colors duration-200" href="#">SHOWCASE</a>
</nav>
<button className="bg-primary text-background font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest cursor-pointer active:opacity-70 transition-all hover:scale-105">
                GET STARTED
            </button>
</div>
</header>
<main className="max-w-[1440px] mx-auto px-md py-xl min-h-screen">

<div className="mb-xl">
<h1 className="font-headline-xl text-headline-xl text-primary mb-md">Buttons</h1>
<p className="font-body-md text-body-md text-secondary max-w-2xl">
                Our button system is designed for high-impact clarity and functional precision. 
                Using a pill-shaped geometry and monochromatic palette, each variant serves a 
                specific role in the PIXELS STUDIO editorial hierarchy.
            </p>
</div>

<section className="py-xl border-t border-border">
<div className="mb-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">PRIMARY BUTTONS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-md items-end">
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DEFAULT</span>
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest transition-all hover:opacity-90 active:scale-95">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">HOVER</span>
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest opacity-80">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">ACTIVE</span>
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest scale-95">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">LOADING</span>
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-xs">
<span className="material-symbols-outlined animate-spin" style={{"fontSize": "16px"}}>progress_activity</span>
</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DISABLED</span>
<button className="bg-surface-container-high text-outline font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest cursor-not-allowed" disabled="">ACTION</button>
</div>
</div>
</section>

<section className="py-xl border-t border-border">
<div className="mb-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">SECONDARY BUTTONS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-md items-end">
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DEFAULT</span>
<button className="bg-surface text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest border border-border transition-all hover:bg-surface-container-high active:scale-95">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">HOVER</span>
<button className="bg-surface-container-high text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest border border-border">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">ACTIVE</span>
<button className="bg-surface-container-highest text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest border border-border scale-95">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">LOADING</span>
<button className="bg-surface text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest border border-border flex items-center justify-center">
<span className="material-symbols-outlined animate-spin" style={{"fontSize": "16px"}}>sync</span>
</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DISABLED</span>
<button className="bg-surface text-outline font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest border border-border opacity-30 cursor-not-allowed" disabled="">ACTION</button>
</div>
</div>
</section>

<section className="py-xl border-t border-border">
<div className="mb-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">OUTLINE BUTTONS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-md items-end">
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DEFAULT</span>
<button className="bg-transparent text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest dashed-border transition-all hover:bg-primary hover:text-background">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">HOVER</span>
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest dashed-border">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">ACTIVE</span>
<button className="bg-transparent text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest dashed-border scale-95">ACTION</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">LOADING</span>
<button className="bg-transparent text-primary font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest dashed-border">
<span className="material-symbols-outlined animate-spin" style={{"fontSize": "16px"}}>cached</span>
</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DISABLED</span>
<button className="bg-transparent text-outline font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest border border-border opacity-20 cursor-not-allowed" disabled="">ACTION</button>
</div>
</div>
</section>

<section className="py-xl border-t border-border">
<div className="mb-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">GHOST BUTTONS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-md items-end">
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DEFAULT</span>
<button className="bg-transparent text-primary font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest transition-all hover:bg-surface-container-low">LEARN MORE</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">HOVER</span>
<button className="bg-surface-container-low text-primary font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest">LEARN MORE</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">ACTIVE</span>
<button className="bg-transparent text-primary font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest scale-95 underline">LEARN MORE</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">LOADING</span>
<button className="bg-transparent text-primary font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest italic opacity-50">SYNCING...</button>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">DISABLED</span>
<button className="bg-transparent text-outline font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest opacity-20 cursor-not-allowed" disabled="">LEARN MORE</button>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-xl py-xl border-t border-border">

<section>
<div className="mb-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">SIZES</span>
</div>
<div className="flex flex-col gap-md items-start">
<button className="bg-primary text-background font-label-sm text-label-sm px-xl py-lg rounded-full font-bold uppercase tracking-widest transition-all hover:scale-[1.02]">LARGE BUTTON</button>
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest">MEDIUM BUTTON</button>
<button className="bg-primary text-background font-label-sm text-label-sm px-md py-xs rounded-full font-bold uppercase tracking-widest">SMALL BUTTON</button>
</div>
</section>

<section>
<div className="mb-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">ICONS</span>
</div>
<div className="flex flex-wrap gap-md items-center">
<button className="bg-primary text-background font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest flex items-center gap-xs transition-all hover:gap-sm">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>add</span>
                        NEW PROJECT
                    </button>
<button className="bg-surface text-primary border border-border font-label-sm text-label-sm px-lg py-md rounded-full font-bold uppercase tracking-widest flex items-center gap-xs transition-all hover:translate-x-1">
                        CONTINUE
                        <span className="material-symbols-outlined" style={{"fontSize": "18px"}}>chevron_right</span>
</button>
<button className="bg-surface-container-high text-primary w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all hover:rotate-90">
<span className="material-symbols-outlined" style={{"fontSize": "24px"}}>settings</span>
</button>
</div>
</section>
</div>

<section className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="md:col-span-2 bg-surface rounded-xl p-lg border border-border flex flex-col justify-between overflow-hidden relative group">
<div className="z-10">
<h3 className="font-headline-lg text-headline-lg mb-md text-primary">Dynamic Control</h3>
<p className="font-body-md text-body-md text-secondary max-w-sm mb-lg">Experience the tactile feedback of our interface components. Designed for precise digital manipulation.</p>
<div className="flex gap-md">
<button className="bg-primary text-background px-lg py-md rounded-full font-bold uppercase tracking-widest">INTERACT</button>
<button className="bg-transparent border border-border text-primary px-lg py-md rounded-full font-bold uppercase tracking-widest">EXPLORE</button>
</div>
</div>
<div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">

</div>
</div>
<div className="bg-surface rounded-xl p-lg border border-border flex flex-col items-center justify-center text-center">
<div className="mb-md">
<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-md mx-auto">
<span className="material-symbols-outlined text-background" data-weight="fill" style={{"fontSize": "32px"}}>token</span>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">SYSTEM COMPLIANT</span>
</div>
<button className="w-full bg-surface-container-high text-primary py-md rounded-full font-bold uppercase tracking-widest border border-border">VIEW DOCS</button>
</div>
</section>
</main>

<footer className="w-full border-t border-border">
<div className="flex flex-col md:flex-row justify-between items-center py-lg px-md max-w-[1440px] mx-auto">
<div className="mb-md md:mb-0">
<span className="font-headline-lg text-headline-lg text-primary font-bold tracking-tighter">PIXELS STUDIO</span>
</div>
<div className="flex gap-lg mb-md md:mb-0">
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200" href="#">PRIVACY</a>
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200" href="#">TERMS</a>
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200" href="#">CHANGELOG</a>
<a className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200" href="#">TWITTER</a>
</div>
<div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest opacity-50">
                © 2024 PIXELS STUDIO. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>


    </div>
  );
}
