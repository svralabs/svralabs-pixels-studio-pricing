import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudioLoaderShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="w-full top-0 sticky z-50 bg-background dark:bg-background border-b border-border">
<div className="flex justify-between items-center h-20 px-md max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary">PIXELS STUDIO</div>
<div className="hidden md:flex gap-md items-center">
<a className="text-primary border-b border-primary pb-1 font-label-sm uppercase tracking-widest cursor-pointer transition-colors duration-200" href="#">COMPONENTS</a>
<a className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70" href="#">GUIDELINES</a>
<a className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70" href="#">RESOURCES</a>
<a className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70" href="#">SHOWCASE</a>
</div>
<button className="bg-primary text-on-primary px-md py-sm rounded-full font-label-sm tracking-widest hover:opacity-90 active:scale-95 transition-all">GET STARTED</button>
</div>
</nav>
<main className="max-w-[1440px] mx-auto px-md">

<section className="py-xl border-b border-border">
<div className="grid grid-cols-1 md:grid-cols-12 gap-md items-end">
<div className="md:col-span-8">
<span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-md block">System Library V1.0</span>
<h1 className="font-h1 text-h1 text-primary mb-md">Loading Systems</h1>
<p className="font-body-md text-secondary max-w-xl">
                        A definitive study in technical precision and motion aesthetics. Our loading components leverage mathematical accuracy and minimal visual noise to provide feedback without distraction. Built for the high-performance studio.
                    </p>
</div>
<div className="md:col-span-4 flex md:justify-end">
<div className="p-lg border border-dashed border-border relative flex flex-col items-center">
<div className="w-12 h-12 border-2 border-border border-t-primary rounded-full animate-spin"></div>
<span className="mt-sm font-label-sm text-secondary tabular uppercase">Ref 0.01_Init</span>
</div>
</div>
</div>
</section>

<section className="py-xl border-b border-border">
<div className="flex justify-between items-baseline mb-lg">
<h2 className="font-h2 text-h2 text-primary">01. Spinners</h2>
<span className="font-label-sm text-secondary uppercase">Geometric Feedback</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

<div className="p-lg border border-border flex flex-col items-center justify-center min-h-[300px] relative corner-tick">
<div className="flex items-end gap-md mb-lg">
<div className="w-6 h-6 border-[1px] border-border border-t-primary rounded-full animate-spin"></div>
<div className="w-12 h-12 border-[1px] border-border border-t-primary rounded-full animate-spin"></div>
<div className="w-20 h-20 border-[1px] border-border border-t-primary rounded-full animate-spin"></div>
</div>
<p className="font-label-sm text-secondary uppercase tracking-widest text-center">Hairline Circular</p>
</div>

<div className="p-lg border border-border flex flex-col items-center justify-center min-h-[300px] relative corner-tick">
<div className="flex items-center gap-md mb-lg">
<div className="w-16 h-16 border-2 border-dashed border-primary rounded-full animate-spin"></div>
</div>
<p className="font-label-sm text-secondary uppercase tracking-widest text-center">Dashed Perimeter</p>
</div>

<div className="p-lg border border-border flex flex-col items-center justify-center min-h-[300px] relative corner-tick">
<div className="relative w-20 h-20 mb-lg">
<div className="absolute inset-0 rounded-full bg-primary opacity-20" style={{"animation": "pulse-ring 2s infinite"}}></div>
<div className="absolute inset-4 rounded-full border border-primary animate-pulse"></div>
</div>
<p className="font-label-sm text-secondary uppercase tracking-widest text-center">Atomic Pulse</p>
</div>
</div>
</section>

<section className="py-xl border-b border-border">
<div className="flex justify-between items-baseline mb-lg">
<h2 className="font-h2 text-h2 text-primary">02. Linear Progress</h2>
<span className="font-label-sm text-secondary uppercase">Temporal Flow</span>
</div>
<div className="space-y-xl">

<div className="max-w-3xl">
<div className="flex justify-between font-label-sm text-secondary mb-xs tabular uppercase">
<span>Loading Data</span>
<span id="pct-1">0%</span>
</div>
<div className="h-[1px] bg-border w-full relative">
<div className="h-full bg-primary absolute left-0 top-0 transition-all duration-300" id="bar-1" style={{"width": "0%"}}></div>
</div>
<p className="mt-sm font-label-sm text-secondary uppercase tracking-tighter opacity-50">Type: Continuous Hairline</p>
</div>

<div className="max-w-3xl">
<div className="flex justify-between font-label-sm text-secondary mb-xs tabular uppercase">
<span>Resource Sync</span>
<span id="pct-2">0%</span>
</div>
<div className="h-2 flex gap-1 w-full overflow-hidden">
<div className="h-full bg-primary transition-all duration-500" id="bar-2" style={{"width": "0%"}}></div>
<div className="flex-grow h-full bg-repeat-x" style={{"backgroundImage": "radial-gradient(circle, #333 1px, transparent 1px)", "backgroundSize": "8px 100%"}}></div>
</div>
<p className="mt-sm font-label-sm text-secondary uppercase tracking-tighter opacity-50">Type: Dotted Overflow</p>
</div>

<div className="max-w-3xl">
<div className="flex justify-between font-label-sm text-secondary mb-xs tabular uppercase">
<span>Compilation Sequence</span>
<span>Step 03/12</span>
</div>
<div className="grid grid-cols-12 gap-2">
<div className="h-1 bg-primary"></div>
<div className="h-1 bg-primary"></div>
<div className="h-1 bg-primary"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
<div className="h-1 bg-border"></div>
</div>
<p className="mt-sm font-label-sm text-secondary uppercase tracking-tighter opacity-50">Type: Discrete Segmented</p>
</div>
</div>
</section>

<section className="py-xl border-b border-border">
<div className="flex justify-between items-baseline mb-lg">
<h2 className="font-h2 text-h2 text-primary">03. Perception</h2>
<span className="font-label-sm text-secondary uppercase">Skeleton Loaders</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

<div className="p-lg border border-dashed border-border bg-surface relative">
<div className="skeleton h-64 w-full mb-md"></div>
<div className="skeleton h-8 w-3/4 mb-sm"></div>
<div className="skeleton h-4 w-1/2 mb-md"></div>
<div className="flex gap-sm">
<div className="skeleton h-10 w-24 rounded-full"></div>
<div className="skeleton h-10 w-24 rounded-full"></div>
</div>
</div>

<div className="space-y-md">
<div className="p-md border border-border flex items-center gap-md">
<div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
<div className="flex-grow space-y-sm">
<div className="skeleton h-5 w-1/3"></div>
<div className="skeleton h-4 w-2/3"></div>
</div>
</div>
<div className="p-md border border-border flex items-center gap-md">
<div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
<div className="flex-grow space-y-sm">
<div className="skeleton h-5 w-1/2"></div>
<div className="skeleton h-4 w-3/4"></div>
</div>
</div>
<div className="p-md border border-border flex items-center gap-md opacity-60">
<div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
<div className="flex-grow space-y-sm">
<div className="skeleton h-5 w-1/4"></div>
<div className="skeleton h-4 w-1/2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-xl border-b border-border">
<div className="flex justify-between items-baseline mb-lg">
<h2 className="font-h2 text-h2 text-primary">04. Brand Motion</h2>
<span className="font-label-sm text-secondary uppercase">Transition Logic</span>
</div>
<div className="h-96 w-full border border-border flex flex-col items-center justify-center relative bg-background overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{"backgroundImage": "radial-gradient(#FFF 1px, transparent 1px)", "backgroundSize": "32px 32px"}}></div>
<div className="z-10 text-center">
<h3 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tighter pixel-mask">PIXELS STUDIO</h3>
<div className="mt-md font-label-sm text-secondary uppercase tracking-[0.4em] opacity-50">Initalizing Creative Kernel...</div>
</div>

<div className="absolute top-md left-md font-label-sm text-border tabular uppercase">SYS_LOAD [0.941]</div>
<div className="absolute top-md right-md font-label-sm text-border tabular uppercase">LOC_ID: PS_OS</div>
<div className="absolute bottom-md left-md font-label-sm text-border tabular uppercase">BUFF: 4096MB</div>
<div className="absolute bottom-md right-md font-label-sm text-border tabular uppercase">KERN_V: 1.0.4</div>
</div>
</section>
</main>

<footer className="w-full bg-background dark:bg-background border-t border-border">
<div className="flex flex-col md:flex-row justify-between items-center py-lg px-md max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg text-primary mb-md md:mb-0">PIXELS STUDIO</div>
<div className="flex gap-md mb-md md:mb-0">
<a className="text-secondary uppercase tracking-widest font-label-sm hover:text-primary transition-colors cursor-pointer" href="#">PRIVACY</a>
<a className="text-secondary uppercase tracking-widest font-label-sm hover:text-primary transition-colors cursor-pointer" href="#">TERMS</a>
<a className="text-secondary uppercase tracking-widest font-label-sm hover:text-primary transition-colors cursor-pointer" href="#">CHANGELOG</a>
<a className="text-secondary uppercase tracking-widest font-label-sm hover:text-primary transition-colors cursor-pointer" href="#">TWITTER</a>
</div>
<div className="text-secondary dark:text-secondary-fixed-dim font-label-sm uppercase tracking-widest">
                © 2024 PIXELS STUDIO. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>


    </div>
  );
}
