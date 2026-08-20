import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const services = [
  {
    id: 1,
    title: '2-WEEK DESIGN SPRINT',
    price: '$2,500',
    type: 'ONE-TIME',
    icon: 'bolt',
    features: [
      'Landing page that converts',
      'Dashboard built for daily use',
      'Mobile app, up to 8 screens',
      'Pitch deck to win the round'
    ]
  },
  {
    id: 2,
    title: 'ONGOING PARTNERSHIP',
    price: '$5,000',
    type: '/ MONTH',
    icon: 'all_inclusive',
    features: [
      'Work directly with the founder',
      'Unlimited requests',
      'Quarterly strategy sessions',
      'Priority support'
    ]
  }
];

const comparisonData = [
  {
    feature: 'Design Sprint',
    sprint: true,
    partnership: false
  },
  {
    feature: 'Ongoing Partnership',
    sprint: false,
    partnership: true
  },
  {
    feature: 'Custom Development',
    sprint: true,
    partnership: true
  },
  {
    feature: 'Brand Identity',
    sprint: true,
    partnership: true
  },
  {
    feature: 'Content Creation',
    sprint: false,
    partnership: true
  },
  {
    feature: 'Marketing Strategy',
    sprint: false,
    partnership: true
  }
];

export default function ServicesPricing() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="min-h-screen bg-background text-primary">
      <nav className="bg-background text-primary font-label-sm text-label-sm tracking-widest uppercase full-width top-0 sticky border-b border-border flat no-shadows z-50">
        <div className="flex justify-between items-center w-full px-sm md:px-md py-xs max-w-[1440px] mx-auto">
          <div className="font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tighter font-black text-primary">
            PIXELS STUDIO
          </div>
          <div className="hidden md:flex items-center gap-md">
            <a className="text-secondary hover:text-primary transition-colors duration-200" href="#">WORK</a>
            <a className="text-primary border-b border-primary pb-1" href="#">SERVICES</a>
            <a className="text-secondary hover:text-primary transition-colors duration-200" href="#">INFORMATION</a>
            <a className="text-secondary hover:text-primary transition-colors duration-200" href="#">CONTACT</a>
          </div>
          <div className="flex items-center gap-sm">
            <a className="hidden sm:block text-secondary hover:text-primary transition-colors duration-200" href="#">TWITTER</a>
            <a className="text-secondary hover:text-primary transition-colors duration-200" href="#">EMAIL</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-sm md:px-md py-xl min-h-screen">
        <div className="relative inline-flex items-center justify-center px-sm py-xs mb-md">
          <div className="absolute inset-0 dotted-border"></div>
          <div className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] flex items-center justify-center">
            <div className="w-full h-[1px] bg-border absolute"></div>
            <div className="h-full w-[1px] bg-border absolute"></div>
          </div>
          <div className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] flex items-center justify-center">
            <div className="w-full h-[1px] bg-border absolute"></div>
            <div className="h-full w-[1px] bg-border absolute"></div>
          </div>
          <div className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] flex items-center justify-center">
            <div className="w-full h-[1px] bg-border absolute"></div>
            <div className="h-full w-[1px] bg-border absolute"></div>
          </div>
          <div className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] flex items-center justify-center">
            <div className="w-full h-[1px] bg-border absolute"></div>
            <div className="h-full w-[1px] bg-border absolute"></div>
          </div>
          <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase">SERVICES</span>
        </div>

        <h1 className="font-h1 text-headline-xl-mobile md:text-headline-xl max-w-4xl mb-xl">
          A sprint to ship one thing well, or a retainer for everything after.
        </h1>

        <div className="flex justify-end mb-md">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="bg-surface border border-border rounded-full px-md py-xs font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-xs hover:bg-border transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-primary">
              {showComparison ? 'close' : 'compare'}
            </span>
            {showComparison ? 'Hide Comparison' : 'Compare Services'}
          </button>
        </div>

        {showComparison ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-surface border border-border px-md py-sm text-left font-label-sm text-label-sm uppercase tracking-widest">Feature</th>
                  <th className="bg-surface border border-border px-md py-sm font-label-sm text-label-sm uppercase tracking-widest">Design Sprint</th>
                  <th className="bg-surface border border-border px-md py-sm font-label-sm text-label-sm uppercase tracking-widest">Ongoing Partnership</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-surface' : 'bg-background'}>
                    <td className="border border-border px-md py-sm font-body-md text-body-md">{item.feature}</td>
                    <td className="border border-border px-md py-sm text-center">
                      {item.sprint ? (
                        <span className="material-symbols-outlined text-primary">check</span>
                      ) : (
                        <span className="material-symbols-outlined text-secondary">close</span>
                      )}
                    </td>
                    <td className="border border-border px-md py-sm text-center">
                      {item.partnership ? (
                        <span className="material-symbols-outlined text-primary">check</span>
                      ) : (
                        <span className="material-symbols-outlined text-secondary">close</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
            {services.map((service) => (
              <PricingCard
                key={service.id}
                title={service.title}
                price={service.price}
                type={service.type}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
