import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PixelsStudio404Brutalist() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-surface fixed top-0 z-50 w-full border-b border-outline-variant">
<div className="flex justify-between items-center w-full px-md md:px-lg py-sm max-w-[1440px] mx-auto">
<div className="font-h2 text-h2 tracking-tighter text-primary uppercase">PIXELS STUDIO</div>
<div className="hidden md:flex items-center gap-md">
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">HOME</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">WORK</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">GALLERY</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">SERVICES</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">CONTACT</a>
</div>
<button className="bg-primary text-on-primary font-label-sm text-label-sm px-md py-xs rounded-full uppercase tracking-widest hover:opacity-80 transition-all">
            START A PROJECT
        </button>
</div>
</nav>

<main className="flex-grow flex pt-[64px]">

<section className="hidden md:flex w-1/2 border-r border-outline-variant items-center justify-center relative overflow-hidden bg-surface-container-lowest">
<div className="crosshair top-md left-md opacity-40"></div>
<div className="crosshair top-md right-md opacity-40"></div>
<div className="crosshair bottom-md left-md opacity-40"></div>
<div className="crosshair bottom-md right-md opacity-40"></div>
<div className="massive-404 font-bold text-primary select-none rotate-180 transform hover:scale-105 transition-transform duration-700 ease-in-out">
            404
        </div>
</section>

<section className="w-full md:w-1/2 flex flex-col p-md md:p-xl relative">
<div className="flex-grow space-y-lg">

<div className="space-y-xs">
<span className="terminal-text uppercase opacity-60 flex items-center gap-xs">
<span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
                    System_Exception_Detected
                </span>
<h1 className="font-h1 text-h1 uppercase tracking-tight text-primary leading-none">
                    ERROR_404: <br/>DIRECTORY_UNREACHABLE
                </h1>
</div>

<div className="grid grid-cols-1 gap-sm">

<div className="brutalist-border p-md relative group hover:bg-surface-container-low transition-colors">
<div className="crosshair top-0 left-0 w-2 h-2"></div>
<h3 className="terminal-text mb-sm border-b border-outline-variant pb-xs">LOST_ASSETS</h3>
<div className="space-y-xs terminal-text">
<div className="flex justify-between"><span>/ROOT/INDEX.HTML</span> <span className="text-error">[FAILED]</span></div>
<div className="flex justify-between"><span>/ASSETS/CORE_MODULE</span> <span className="text-error">[NULL]</span></div>
<div className="flex justify-between"><span>/USER/SESSION_KEY</span> <span className="text-error">[VOID]</span></div>
</div>
</div>

<div className="brutalist-border p-md relative group hover:bg-surface-container-low transition-colors">
<div className="crosshair top-0 left-0 w-2 h-2"></div>
<h3 className="terminal-text mb-sm border-b border-outline-variant pb-xs">KERNEL_STATUS: <span className="status-critical">CRITICAL</span></h3>
<div className="space-y-xs terminal-text">
<div>UPTIME: 0.0000ms</div>
<div>CPU_LOAD: 99.9%</div>
<div>THREAD_COUNT: 0</div>
</div>
</div>

<div className="brutalist-border p-md relative group hover:bg-surface-container-low transition-colors">
<div className="crosshair top-0 left-0 w-2 h-2"></div>
<h3 className="terminal-text mb-sm border-b border-outline-variant pb-xs">MEMORY_DUMP</h3>
<div className="terminal-text break-all opacity-50 overflow-hidden h-12">
                        0x4A6620 0x61206D 0x616E20 0x697320 0x612073 0x756363 0x657373 0x206966 0x206865 0x206765 0x7473 0x207570 0x20696E 0x207468 0x65206D 0x6F726E 0x696E67
                    </div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-md pt-md">
<a className="bg-primary text-on-primary font-label-sm text-label-sm px-xl py-md rounded-none uppercase tracking-widest hover:bg-on-surface transition-colors text-center" href="/">
                    REBOOT_SESSION
                </a>
<button className="border border-outline text-primary font-label-sm text-label-sm px-xl py-md rounded-none uppercase tracking-widest hover:bg-surface-container-highest transition-colors text-center">
                    SYSTEM_DIAGNOSTICS
                </button>
</div>
</div>

<div className="mt-auto pt-lg flex justify-between terminal-text opacity-40">
<span>LOC: [40.7128° N, 74.0060° W]</span>
<span>PRC: HIGH_PRIORITY</span>
</div>
</section>
</main>

<footer className="bg-surface border-t border-outline-variant w-full">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-lg py-lg gap-md max-w-[1440px] mx-auto">
<div className="font-label-sm text-label-sm font-bold text-primary uppercase">© 2024 PIXELS STUDIO. BUILT FOR PRECISION.</div>
<div className="flex gap-md">
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 active:scale-95" href="#">INSTAGRAM</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 active:scale-95" href="#">BEHANCE</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 active:scale-95" href="#">DRIBBBLE</a>
<a className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 active:scale-95" href="#">LINKEDIN</a>
</div>
</div>
</footer>


    </div>
  );
}
