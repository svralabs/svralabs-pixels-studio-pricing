import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DuolingoPricingPage from './pages/DuolingoPricingPage';
import StitchPixelsStudioPricingSystem2 from './pages/StitchPixelsStudioPricingSystem2';
import PixelsStudioServicesPricing from './pages/PixelsStudioServicesPricing';
import PixelsStudioBadgeShowcase from './pages/PixelsStudioBadgeShowcase';
import PixelsStudio404Brutalist from './pages/PixelsStudio404Brutalist';
import PixelsStudioLoaderShowcase from './pages/PixelsStudioLoaderShowcase';
import PixelsStudioButtonShowcase from './pages/PixelsStudioButtonShowcase';
import PixelsStudioInputSelectShowcase from './pages/PixelsStudioInputSelectShowcase';
import PixelsStudioTableShowcase from './pages/PixelsStudioTableShowcase';
import PixelsStudioToastUiShowcase from './pages/PixelsStudioToastUiShowcase';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">pixels-studio-pricing</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Pricing Page</Link>
            <Link to="/stitch-pixels-studio-pricing-system 2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Stitch Pixels Studio Pricing System 2</Link>
            <Link to="/pixels-studio-services-pricing" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Services Pricing</Link>
            <Link to="/pixels-studio-badge-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Badge Showcase</Link>
            <Link to="/pixels-studio-404-brutalist" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio 404 Brutalist</Link>
            <Link to="/pixels-studio-loader-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Loader Showcase</Link>
            <Link to="/pixels-studio-button-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Button Showcase</Link>
            <Link to="/pixels-studio-input-select-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Input Select Showcase</Link>
            <Link to="/pixels-studio-table-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Table Showcase</Link>
            <Link to="/pixels-studio-toast-ui-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pixels Studio Toast Ui Showcase</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<DuolingoPricingPage />} />
          <Route path="/stitch-pixels-studio-pricing-system 2" element={<StitchPixelsStudioPricingSystem2 />} />
          <Route path="/pixels-studio-services-pricing" element={<PixelsStudioServicesPricing />} />
          <Route path="/pixels-studio-badge-showcase" element={<PixelsStudioBadgeShowcase />} />
          <Route path="/pixels-studio-404-brutalist" element={<PixelsStudio404Brutalist />} />
          <Route path="/pixels-studio-loader-showcase" element={<PixelsStudioLoaderShowcase />} />
          <Route path="/pixels-studio-button-showcase" element={<PixelsStudioButtonShowcase />} />
          <Route path="/pixels-studio-input-select-showcase" element={<PixelsStudioInputSelectShowcase />} />
          <Route path="/pixels-studio-table-showcase" element={<PixelsStudioTableShowcase />} />
          <Route path="/pixels-studio-toast-ui-showcase" element={<PixelsStudioToastUiShowcase />} />
          <Route path="*" element={<DuolingoPricingPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
