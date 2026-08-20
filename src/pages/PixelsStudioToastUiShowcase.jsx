import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudioToastUiShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full bg-background dark:bg-background border-b border-border dark:border-border z-50 transition-all duration-300 ease-in-out">
<div className="flex justify-between items-center w-full px-md py-sm max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary tracking-tighter">
                Toast UI Showcase
            </div>
<div className="hidden md:flex items-center gap-md">
<a className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-primary border-b border-primary pb-1 transition-colors duration-200" href="#">WORK</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary dark:text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">SERVICES</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary dark:text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">INFORMATION</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary dark:text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">CONTACT</a>
</div>
<button className="bg-primary text-background font-label-sm text-label-sm px-md py-xs rounded-full uppercase tracking-widest hover:opacity-90 transition-opacity">
                GET IN TOUCH
            </button>
</div>
</nav>
<main className="pt-xl pb-xl max-w-[1440px] mx-auto px-md">

<header className="mt-xl mb-xl border-b border-border pb-lg">
<h1 className="font-headline-xl text-headline-xl text-primary leading-[0.85] tracking-[-0.07em] uppercase">
                TOAST<br/>NOTIFICATIONS
            </h1>
<div className="mt-md flex justify-between items-end">
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest max-w-xs">
                    Technical documentation for the Pixels Studio notification design system. v1.0.4
                </p>
<div className="tabular-nums font-label-sm text-label-sm text-outline">
                    [ 52.3767° N, 4.8936° E ]
                </div>
</div>
</header>

<section className="mb-xl">
<div className="flex items-center gap-xs mb-lg">
<span className="font-label-sm text-label-sm bg-primary text-background px-xs py-1">01</span>
<h2 className="font-label-sm text-label-sm uppercase tracking-widest">Status Variants</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">

<div className="bg-primary p-md flex flex-col justify-between min-h-[160px] relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-background" data-icon="check_circle" data-weight="fill" style={{"fontVariationSettings": "FILL 1"}}>check_circle</span>
<span className="font-label-sm text-[10px] text-background opacity-50 tabular-nums">ID: 882-S</span>
</div>
<div className="mt-lg">
<p className="text-background font-bold uppercase text-sm tracking-tight leading-tight">Data synchronized successfully</p>
<p className="text-background opacity-70 text-xs mt-1">Changes are live on production</p>
</div>
</div>

<div className="bg-surface hairline-border border-l-4 border-l-error p-md flex flex-col justify-between min-h-[160px]">
<div className="flex justify-between items-start">
<span className="font-label-sm text-[10px] bg-error text-background px-1">CRITICAL_FAILURE</span>
<span className="material-symbols-outlined text-error" data-icon="error">error</span>
</div>
<div className="mt-lg">
<p className="text-on-surface font-bold uppercase text-sm tracking-tight leading-tight">Connection timed out</p>
<p className="text-secondary text-xs mt-1 tabular-nums">ERR_CODE: 0x404_VOID</p>
</div>
</div>

<div className="bg-surface hairline-border p-md flex flex-col justify-between min-h-[160px] relative">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-secondary" data-icon="warning">warning</span>
<span className="font-label-sm text-[10px] text-outline tabular-nums">LIMIT_REACHED</span>
</div>
<div className="mt-lg">
<p className="text-on-surface font-bold uppercase text-sm tracking-tight leading-tight">Storage at 92% capacity</p>
<p className="text-secondary text-xs mt-1">Consider upgrading your plan</p>
</div>
</div>

<div className="bg-surface hairline-border p-md flex flex-col justify-between min-h-[160px]">
<div className="flex justify-between items-start">
<span className="font-label-sm text-[10px] border border-border text-outline px-1">SYS_NOTICE</span>
<span className="material-symbols-outlined text-secondary" data-icon="info">info</span>
</div>
<div className="mt-lg">
<p className="text-on-surface font-bold uppercase text-sm tracking-tight leading-tight">New update available</p>
<p className="text-secondary text-xs mt-1">Version 2.4 is now ready</p>
</div>
</div>
</div>
</section>

<section className="mb-xl pt-lg border-t border-border">
<div className="flex items-center gap-xs mb-lg">
<span className="font-label-sm text-label-sm bg-primary text-background px-xs py-1">02</span>
<h2 className="font-label-sm text-label-sm uppercase tracking-widest">Positioning Matrix</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-md">

<div className="flex flex-col gap-sm">
<div className="aspect-square hairline-border relative group cursor-crosshair">
<div className="absolute inset-2 dashed-border opacity-20"></div>
<div className="absolute top-2 right-2 w-4 h-2 bg-primary"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-label-sm text-[10px] uppercase">Top-Right</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-outline uppercase tracking-tighter">Pos: TR_01</span>
</div>
<div className="flex flex-col gap-sm">
<div className="aspect-square hairline-border relative group cursor-crosshair">
<div className="absolute inset-2 dashed-border opacity-20"></div>
<div className="absolute bottom-2 right-2 w-4 h-2 bg-primary"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-label-sm text-[10px] uppercase">Bottom-Right</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-outline uppercase tracking-tighter">Pos: BR_01</span>
</div>
<div className="flex flex-col gap-sm">
<div className="aspect-square hairline-border relative group cursor-crosshair">
<div className="absolute inset-2 dashed-border opacity-20"></div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-primary"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-label-sm text-[10px] uppercase">Bottom-Center</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-outline uppercase tracking-tighter">Pos: BC_01</span>
</div>
<div className="flex flex-col gap-sm">
<div className="aspect-square hairline-border relative group cursor-crosshair">
<div className="absolute inset-2 dashed-border opacity-20"></div>
<div className="absolute top-2 left-2 w-4 h-2 bg-primary"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-label-sm text-[10px] uppercase">Top-Left</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-outline uppercase tracking-tighter">Pos: TL_01</span>
</div>
<div className="flex flex-col gap-sm">
<div className="aspect-square hairline-border relative group cursor-crosshair">
<div className="absolute inset-2 dashed-border opacity-20"></div>
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-primary"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-label-sm text-[10px] uppercase">Top-Center</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-outline uppercase tracking-tighter">Pos: TC_01</span>
</div>
<div className="flex flex-col gap-sm">
<div className="aspect-square hairline-border relative group cursor-crosshair">
<div className="absolute inset-2 dashed-border opacity-20"></div>
<div className="absolute bottom-2 left-2 w-4 h-2 bg-primary"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-label-sm text-[10px] uppercase">Bottom-Left</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-outline uppercase tracking-tighter">Pos: BL_01</span>
</div>
</div>
</section>

<section className="mb-xl pt-lg border-t border-border">
<div className="flex items-center gap-xs mb-lg">
<span className="font-label-sm text-label-sm bg-primary text-background px-xs py-1">03</span>
<h2 className="font-label-sm text-label-sm uppercase tracking-widest">Component Anatomy</h2>
</div>
<div className="bg-surface p-xl border border-border relative overflow-hidden">

<div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-outline-variant"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-outline-variant"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-outline-variant"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-outline-variant"></div>
<div className="max-w-xl mx-auto relative">

<div className="bg-background hairline-border p-md flex gap-md relative">

<div className="relative">
<div className="w-10 h-10 hairline-border flex items-center justify-center text-primary group">
<span className="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="font-label-sm text-[9px] text-outline uppercase whitespace-nowrap bg-background px-1">Icon Slot</span>
<div className="h-8 border-l border-dashed border-outline-variant mt-1"></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center relative">
<div className="absolute -top-12 left-0 flex flex-col items-start w-full">
<span className="font-label-sm text-[9px] text-outline uppercase bg-background px-1">Message String</span>
<div className="h-8 border-l border-dashed border-outline-variant mt-1 ml-4"></div>
</div>
<h4 className="font-bold text-sm uppercase tracking-tight">Sync Completed</h4>
<p className="text-secondary text-xs mt-1">4.2 GB pushed to master branch successfully.</p>
</div>

<div className="flex flex-col items-end justify-between relative">

<div className="relative">
<button className="material-symbols-outlined text-outline hover:text-primary transition-colors" data-icon="close">close</button>
<div className="absolute -top-12 right-0 flex flex-col items-end">
<span className="font-label-sm text-[9px] text-outline uppercase bg-background px-1">Close Action</span>
<div className="h-8 border-r border-dashed border-outline-variant mt-1"></div>
</div>
</div>

<div className="relative">
<span className="tabular-nums font-label-sm text-[10px] text-outline">12:44:02 PM</span>
<div className="absolute -bottom-10 right-0 flex flex-col items-end">
<div className="h-8 border-r border-dashed border-outline-variant mb-1"></div>
<span className="font-label-sm text-[9px] text-outline uppercase bg-background px-1">Timestamp</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-xl">
<div className="swiss-grid">
<div className="col-span-full md:col-span-8 aspect-[21/9] bg-surface hairline-border relative overflow-hidden group">
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{"backgroundImage": "radial-gradient(circle at 2px 2px, #333 1px, transparent 0)", "backgroundSize": "24px 24px"}}></div>

<div className="absolute bottom-md left-md">
<span className="font-label-sm text-[10px] text-outline uppercase">Active Visualization</span>
<div className="font-headline-lg text-headline-lg text-primary tracking-tighter">MOTION_CURVE.JS</div>
</div>
</div>
<div className="col-span-full md:col-span-4 aspect-[4/5] bg-surface hairline-border p-lg flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-sm">Design Intent</span>
<p className="font-body-md text-body-md text-secondary">
                            The Pixels Studio toast system is built for speed and clarity. By utilizing a monochrome palette and tabular figures, we ensure critical system information remains readable even in high-density environments.
                        </p>
</div>
<div className="flex flex-col gap-xs">
<div className="flex justify-between border-b border-border py-2">
<span className="font-label-sm text-[10px] text-outline uppercase">Animation Duration</span>
<span className="font-label-sm text-[10px] text-primary tabular-nums">250ms</span>
</div>
<div className="flex justify-between border-b border-border py-2">
<span className="font-label-sm text-[10px] text-outline uppercase">Easing Curve</span>
<span className="font-label-sm text-[10px] text-primary">Bezier(0.4, 0, 0.2, 1)</span>
</div>
<div className="flex justify-between py-2">
<span className="font-label-sm text-[10px] text-outline uppercase">Default TTL</span>
<span className="font-label-sm text-[10px] text-primary tabular-nums">4000ms</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-border dark:border-border mt-xl">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-md py-lg max-w-[1440px] mx-auto gap-sm">
<div className="font-headline-lg text-headline-lg text-primary tracking-tighter font-bold">
                PIXELS STUDIO
            </div>
<div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary text-center md:text-left">
                © 2024 TOAST UI SHOWCASE. ALL RIGHTS RESERVED.
            </div>
<div className="flex gap-md">
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">DRIBBBLE</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">BEHANCE</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">INSTAGRAM</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">LINKEDIN</a>
</div>
</div>
</footer>


    </div>
  );
}
