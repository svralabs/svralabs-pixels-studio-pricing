import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudioInputSelectShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="w-full top-0 sticky z-50 bg-background border-b border-border">
<div className="flex justify-between items-center px-md py-sm max-w-[1440px] mx-auto w-full">
<div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">PIXELS STUDIO</div>
<div className="hidden md:flex items-center gap-lg">
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300" href="#">WORK</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300" href="#">SERVICES</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary pb-1" href="#">INFORMATION</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300" href="#">CONTACT</a>
</div>
<button className="bg-primary text-background px-md py-xs rounded-full font-label-sm hover:opacity-80 transition-opacity uppercase tracking-widest">
                START PROJECT
            </button>
</div>
</nav>
<main className="max-w-[1440px] mx-auto px-md py-xl space-y-xl">

<header className="max-w-2xl">
<h1 className="font-h1 text-h1 text-primary mb-sm">Interface Components</h1>
<p className="text-secondary font-body-md">A comprehensive showcase of input variants, select menus, and field architectures designed for precision and clarity.</p>
</header>

<section className="space-y-lg">
<div className="flex items-center gap-sm">
<span className="font-label-sm text-primary uppercase tracking-[0.2em]">01</span>
<h2 className="font-h2 text-[1.5rem] text-primary uppercase tracking-tight">Input Variants</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Default Text</label>
<input className="w-full bg-surface border border-border px-sm py-md text-primary focus:outline-none focus:border-primary transition-colors" type="text" value="Studio Value"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Placeholder State</label>
<input className="w-full bg-surface border border-border px-sm py-md text-primary placeholder:text-secondary-fixed-dim focus:outline-none focus:border-primary transition-colors" placeholder="Enter your data..." type="text"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Focus State</label>
<input className="w-full bg-surface border-2 border-primary px-sm py-md text-primary outline-none" type="text" value="Active Focus"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Disabled</label>
<input className="w-full bg-surface border border-border/50 px-sm py-md text-secondary opacity-50 cursor-not-allowed" disabled="" type="text" value="System Locked"/>
</div>
<div className="space-y-xs lg:col-span-2">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Input with Error</label>
<div className="relative">
<input className="w-full bg-surface border border-error-container px-sm py-md text-primary focus:outline-none focus:border-error transition-colors" type="text" value="invalid_entry@pixels"/>
<span className="absolute right-sm top-1/2 -translate-y-1/2 text-error text-[0.7rem] uppercase font-bold tracking-tighter">Invalid Format</span>
</div>
</div>
</div>
</section>

<section className="space-y-lg">
<div className="flex items-center gap-sm">
<span className="font-label-sm text-primary uppercase tracking-[0.2em]">02</span>
<h2 className="font-h2 text-[1.5rem] text-primary uppercase tracking-tight">Input Types</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Password Input</label>
<div className="relative">
<input className="w-full bg-surface border border-border px-sm py-md text-primary focus:outline-none focus:border-primary transition-colors" type="password" value="••••••••"/>
<button className="absolute right-sm top-1/2 -translate-y-1/2 text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[1.2rem]">visibility</span>
</button>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Search Input</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary text-[1.2rem]">search</span>
<input className="w-full bg-surface border border-border pl-xl pr-sm py-md text-primary focus:outline-none focus:border-primary transition-colors" placeholder="Filter projects..." type="search"/>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Number (Tabular)</label>
<div className="relative">
<input className="w-full bg-surface border border-border px-sm py-md text-primary focus:outline-none focus:border-primary transition-colors font-mono" type="number" value="1024"/>
<div className="absolute right-0 top-0 h-full flex flex-col border-l border-border">
<button className="flex-1 px-xs hover:bg-surface-container-high transition-colors border-b border-border">
<span className="material-symbols-outlined text-[1rem]">expand_less</span>
</button>
<button className="flex-1 px-xs hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[1rem]">expand_more</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-lg">
<div className="flex items-center gap-sm">
<span className="font-label-sm text-primary uppercase tracking-[0.2em]">03</span>
<h2 className="font-h2 text-[1.5rem] text-primary uppercase tracking-tight">Select Menus</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md items-start">
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Default Select</label>
<div className="relative">
<select className="w-full bg-surface border border-border px-sm py-md text-primary appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer">
<option>UX STRATEGY</option>
<option>VISUAL DESIGN</option>
<option>DEVELOPMENT</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Open / Active</label>
<div className="relative">
<div className="w-full bg-surface border-x border-t border-primary px-sm py-md text-primary flex justify-between items-center cursor-pointer">
<span>VISUAL DESIGN</span>
<span className="material-symbols-outlined text-primary">expand_less</span>
</div>
<div className="absolute top-full left-0 w-full bg-surface border-x border-b border-primary z-10">
<div className="px-sm py-sm hover:bg-surface-container-high cursor-pointer text-secondary hover:text-primary transition-colors">UX STRATEGY</div>
<div className="px-sm py-sm bg-surface-container-high text-primary cursor-pointer">VISUAL DESIGN</div>
<div className="px-sm py-sm hover:bg-surface-container-high cursor-pointer text-secondary hover:text-primary transition-colors">DEVELOPMENT</div>
</div>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Multi-select Pattern</label>
<div className="w-full bg-surface border border-border p-xs min-h-[58px] flex flex-wrap gap-xs">
<div className="bg-primary text-background px-sm py-1 flex items-center gap-xs rounded-sm group cursor-default">
<span className="text-[0.7rem] font-bold uppercase tracking-widest">MOBILE</span>
<span className="material-symbols-outlined text-[0.9rem] cursor-pointer hover:scale-110 transition-transform">close</span>
</div>
<div className="bg-primary text-background px-sm py-1 flex items-center gap-xs rounded-sm group cursor-default">
<span className="text-[0.7rem] font-bold uppercase tracking-widest">WEB</span>
<span className="material-symbols-outlined text-[0.9rem] cursor-pointer hover:scale-110 transition-transform">close</span>
</div>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-primary py-1 px-xs min-w-[60px] text-sm" placeholder="Add..." type="text"/>
</div>
</div>
</div>
</section>

<section className="space-y-lg">
<div className="flex items-center gap-sm">
<span className="font-label-sm text-primary uppercase tracking-[0.2em]">04</span>
<h2 className="font-h2 text-[1.5rem] text-primary uppercase tracking-tight">Sizes &amp; Fields</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="space-y-md">
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Small Field</label>
<input className="w-full bg-surface border border-border px-sm py-xs text-sm text-primary focus:outline-none focus:border-primary transition-colors" placeholder="Compact Input" type="text"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Large Field</label>
<input className="w-full bg-surface border border-border px-md py-lg text-headline-lg font-headline-lg tracking-tight text-primary focus:outline-none focus:border-primary transition-colors" placeholder="Prominent Action" type="text"/>
</div>
</div>
<div className="space-y-xs h-full">
<label className="font-label-sm text-[#888888] uppercase tracking-widest block">Multi-line Textarea (Blueprint Edition)</label>
<textarea className="w-full bg-surface border-none dashed-border p-lg text-primary focus:outline-none resize-none placeholder:text-secondary-fixed-dim" placeholder="Outline your project vision here..." rows="6"></textarea>
<div className="flex justify-between items-center px-xs">
<span className="text-[0.6rem] text-secondary tracking-widest uppercase">Max 500 Words</span>
<div className="flex gap-1">
<div className="w-1 h-1 bg-primary"></div>
<div className="w-1 h-1 bg-border"></div>
<div className="w-1 h-1 bg-border"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full bottom-0 bg-background border-t border-border mt-xl">
<div className="flex flex-col md:flex-row justify-between items-center px-md py-lg max-w-[1440px] mx-auto w-full gap-md">
<div className="font-headline-lg text-headline-lg font-bold text-primary">PIXELS STUDIO</div>
<div className="flex gap-md">
<a className="font-label-sm text-label-sm uppercase text-secondary hover:text-primary transition-colors" href="#">INSTAGRAM</a>
<a className="font-label-sm text-label-sm uppercase text-secondary hover:text-primary transition-colors" href="#">LINKEDIN</a>
<a className="font-label-sm text-label-sm uppercase text-secondary hover:text-primary transition-colors" href="#">TWITTER</a>
<a className="font-label-sm text-label-sm uppercase text-secondary hover:text-primary transition-colors" href="#">PRIVACY</a>
</div>
<div className="font-label-sm text-label-sm uppercase text-secondary">
                © 2024 PIXELS STUDIO. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>


    </div>
  );
}
