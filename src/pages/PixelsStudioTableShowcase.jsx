import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudioTableShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="w-full top-0 sticky bg-background dark:bg-background border-b border-border z-50">
<div className="flex justify-between items-center h-20 px-md max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary">PIXELS STUDIO</div>
<div className="hidden md:flex space-x-md">
<a className="text-primary border-b border-primary pb-1 cursor-pointer active:opacity-70 transition-colors duration-200">COMPONENTS</a>
<a className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">GUIDELINES</a>
<a className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">RESOURCES</a>
<a className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">SHOWCASE</a>
</div>
<button className="bg-primary text-on-primary px-md py-sm rounded-full font-label-sm hover:opacity-90 transition-opacity cursor-pointer">GET STARTED</button>
</div>
</nav>
<main className="max-w-[1440px] mx-auto px-md py-xl">

<header className="mb-xl max-w-3xl">
<h1 className="font-h1 text-h1 mb-md">Tables</h1>
<p className="text-secondary text-body-md max-w-2xl leading-relaxed">
                Precision-engineered data visualization. Our grid system balances high information density with editorial breathability, ensuring complex data remains readable and elegant across all technical interfaces.
            </p>
</header>

<section className="mb-xl">
<div className="flex flex-col mb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Variant 01</span>
<h2 className="font-h2 text-h2 mt-xs">Editorial Grid</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border">
<th className="py-md pr-md font-label-sm text-label-sm uppercase tracking-widest text-secondary">Asset Name</th>
<th className="py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary">Category</th>
<th className="py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary text-right">Market Cap</th>
<th className="py-md pl-md font-label-sm text-label-sm uppercase tracking-widest text-secondary text-right">Volume (24h)</th>
</tr>
</thead>
<tbody className="divide-y divide-border/30">
<tr className="hover:bg-surface transition-colors duration-200">
<td className="py-lg pr-md text-primary font-medium">Lumina Core 2</td>
<td className="py-lg px-md text-secondary">Hardware</td>
<td className="py-lg px-md text-right tabular-nums text-primary">$1,240,490,000</td>
<td className="py-lg pl-md text-right tabular-nums text-primary">$12,400,200</td>
</tr>
<tr className="hover:bg-surface transition-colors duration-200">
<td className="py-lg pr-md text-primary font-medium">Vertex OS</td>
<td className="py-lg px-md text-secondary">Infrastructure</td>
<td className="py-lg px-md text-right tabular-nums text-primary">$842,000,000</td>
<td className="py-lg pl-md text-right tabular-nums text-primary">$4,120,500</td>
</tr>
<tr className="hover:bg-surface transition-colors duration-200">
<td className="py-lg pr-md text-primary font-medium">Aether Node</td>
<td className="py-lg px-md text-secondary">Networking</td>
<td className="py-lg px-md text-right tabular-nums text-primary">$312,900,000</td>
<td className="py-lg pl-md text-right tabular-nums text-primary">$2,800,000</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-xl">
<div className="flex flex-col mb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Variant 02</span>
<h2 className="font-h2 text-h2 mt-xs">Interactive Shell</h2>
</div>
<div className="bg-surface-dim border border-border rounded-lg overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-border">
<th className="py-md px-md w-12 text-center">
<input className="bg-background border-border rounded-none text-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</th>
<th className="py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary">Project ID</th>
<th className="py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary">Status</th>
<th className="py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary">Progress</th>
<th className="py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border">
<tr className="hover:bg-surface transition-colors group">
<td className="py-md px-md text-center">
<input className="bg-background border-border rounded-none text-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</td>
<td className="py-md px-md font-medium text-primary">PX-8829</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-sm py-1 bg-surface-container-highest rounded-full border border-border">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-label-sm text-primary">ACTIVE</span>
</span>
</td>
<td className="py-md px-md">
<div className="w-32 h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-3/4"></div>
</div>
</td>
<td className="py-md px-md text-right">
<button className="bg-primary text-on-primary text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">MANAGE</button>
</td>
</tr>
<tr className="hover:bg-surface transition-colors group">
<td className="py-md px-md text-center">
<input className="bg-background border-border rounded-none text-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</td>
<td className="py-md px-md font-medium text-primary">PX-9004</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-sm py-1 bg-surface-container-highest rounded-full border border-border">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
<span className="text-xs font-label-sm text-primary">PENDING</span>
</span>
</td>
<td className="py-md px-md">
<div className="w-32 h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-1/4"></div>
</div>
</td>
<td className="py-md px-md text-right">
<button className="bg-primary text-on-primary text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">MANAGE</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="mb-xl">
<div className="flex flex-col mb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Variant 03</span>
<h2 className="font-h2 text-h2 mt-xs">Technical Specs</h2>
</div>
<div className="dashed-border p-md relative bg-surface">

<div className="absolute -top-1 -left-1 w-2 h-2 bg-primary"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary"></div>
<div className="overflow-x-auto">
<table className="w-full border-collapse border border-border/50">
<thead>
<tr>
<th className="border border-border p-md bg-background font-label-sm text-label-sm uppercase tracking-widest text-secondary">Feature</th>
<th className="border border-border p-md bg-background font-label-sm text-label-sm uppercase tracking-widest text-secondary">Legacy v1.0</th>
<th className="border border-border p-md bg-background font-label-sm text-label-sm uppercase tracking-widest text-secondary text-primary">Titan v2.0</th>
</tr>
</thead>
<tbody className="text-center">
<tr>
<td className="border border-border p-md text-left font-medium">Throughput Cap</td>
<td className="border border-border p-md tabular-nums text-secondary">1.2 GB/s</td>
<td className="border border-border p-md tabular-nums font-bold text-primary">8.5 GB/s</td>
</tr>
<tr>
<td className="border border-border p-md text-left font-medium">Latency Delay</td>
<td className="border border-border p-md tabular-nums text-secondary">42ms</td>
<td className="border border-border p-md tabular-nums font-bold text-primary">2ms</td>
</tr>
<tr>
<td className="border border-border p-md text-left font-medium">Core Architecture</td>
<td className="border border-border p-md text-secondary uppercase tracking-widest text-[10px]">Monolithic</td>
<td className="border border-border p-md font-bold text-primary uppercase tracking-widest text-[10px]">Distributed</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-lg">

<div>
<div className="flex flex-col mb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">State 01</span>
<h2 className="font-h2 text-h2 mt-xs">Empty Result</h2>
</div>
<div className="border border-border border-dashed h-80 flex flex-col items-center justify-center text-center p-xl bg-surface-container-lowest">
<span className="material-symbols-outlined text-outline text-headline-lg mb-md" data-icon="inventory_2">inventory_2</span>
<h3 className="font-headline-lg text-lg mb-xs">No entries found</h3>
<p className="text-secondary text-sm max-w-[240px]">Your current filter parameters do not match any available records in the database.</p>
<button className="mt-md border border-border px-md py-sm rounded-none font-label-sm hover:bg-surface transition-colors uppercase tracking-widest text-[10px]">Reset Filters</button>
</div>
</div>

<div>
<div className="flex flex-col mb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">State 02</span>
<h2 className="font-h2 text-h2 mt-xs">Skeleton Load</h2>
</div>
<div className="border border-border h-80 p-md bg-surface-container-lowest space-y-md">
<div className="flex gap-md border-b border-border pb-md">
<div className="h-4 w-24 bg-surface-container-highest animate-pulse"></div>
<div className="h-4 w-32 bg-surface-container-highest animate-pulse"></div>
<div className="h-4 w-16 bg-surface-container-highest animate-pulse ml-auto"></div>
</div>
<div className="space-y-md">
<div className="flex gap-md">
<div className="h-6 w-40 bg-surface-container animate-pulse"></div>
<div className="h-6 w-20 bg-surface-container animate-pulse"></div>
<div className="h-6 w-24 bg-surface-container animate-pulse ml-auto"></div>
</div>
<div className="flex gap-md">
<div className="h-6 w-32 bg-surface-container animate-pulse"></div>
<div className="h-6 w-28 bg-surface-container animate-pulse"></div>
<div className="h-6 w-20 bg-surface-container animate-pulse ml-auto"></div>
</div>
<div className="flex gap-md">
<div className="h-6 w-48 bg-surface-container animate-pulse"></div>
<div className="h-6 w-16 bg-surface-container animate-pulse"></div>
<div className="h-6 w-28 bg-surface-container animate-pulse ml-auto"></div>
</div>
<div className="flex gap-md">
<div className="h-6 w-36 bg-surface-container animate-pulse"></div>
<div className="h-6 w-24 bg-surface-container animate-pulse"></div>
<div className="h-6 w-20 bg-surface-container animate-pulse ml-auto"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-border mt-xl">
<div className="flex flex-col md:flex-row justify-between items-center py-lg px-md max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg text-primary mb-md md:mb-0">PIXELS STUDIO</div>
<div className="flex flex-col items-center md:items-end gap-sm">
<div className="flex space-x-md text-secondary uppercase tracking-widest font-label-sm">
<a className="hover:text-primary transition-colors duration-200 cursor-pointer">PRIVACY</a>
<a className="hover:text-primary transition-colors duration-200 cursor-pointer">TERMS</a>
<a className="hover:text-primary transition-colors duration-200 cursor-pointer">CHANGELOG</a>
<a className="hover:text-primary transition-colors duration-200 cursor-pointer">TWITTER</a>
</div>
<div className="text-secondary font-label-sm uppercase tracking-widest text-[10px]">© 2024 PIXELS STUDIO. ALL RIGHTS RESERVED.</div>
</div>
</div>
</footer>


    </div>
  );
}
