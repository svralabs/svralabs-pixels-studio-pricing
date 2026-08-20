import { Link } from 'react-router-dom';

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
      'Dedicated design lead'
    ]
  }
];

export default function ServicesPricing() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background text-primary font-label-sm text-label-sm tracking-widest uppercase full-width top-0 sticky border-b border-border flat no-shadows z-50">
        <div className="flex justify-between items-center w-full px-sm md:px-md py-xs max-w-[1440px] mx-auto">
          <div className="font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tighter font-black text-primary">
            PIXELS STUDIO
          </div>
          <div className="hidden md:flex items-center gap-md">
            <Link className="text-secondary hover:text-primary transition-colors duration-200" to="#">WORK</Link>
            <Link className="text-primary border-b border-primary pb-1" to="#">SERVICES</Link>
            <Link className="text-secondary hover:text-primary transition-colors duration-200" to="#">INFORMATION</Link>
            <Link className="text-secondary hover:text-primary transition-colors duration-200" to="#">CONTACT</Link>
          </div>
          <div className="flex items-center gap-sm">
            <Link className="hidden sm:block text-secondary hover:text-primary transition-colors duration-200" to="#">TWITTER</Link>
            <Link className="text-secondary hover:text-primary transition-colors duration-200" to="#">EMAIL</Link>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          {services.map((service) => (
            <div key={service.id} className="bg-surface rounded-[24px] p-lg relative border border-border flex flex-col justify-between group overflow-hidden">
              <div className="corner-tick tick-tl"></div>
              <div className="corner-tick tick-tr"></div>
              <div className="corner-tick tick-bl"></div>
              <div className="corner-tick tick-br"></div>
              <div>
                <div className="flex justify-between items-start mb-lg">
                  <div>
                    <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-xs">{service.title}</h3>
                    <div className="flex items-baseline gap-xs">
                      <span className="font-headline-lg text-headline-lg">{service.price}</span>
                      <span className="font-label-sm text-label-sm text-on-secondary-container">{service.type}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-border rounded-full">
                    <span className="material-symbols-outlined text-primary">{service.icon}</span>
                  </div>
                </div>
                <ul className="space-y-md mb-xl">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-sm">
                      <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                        <rect height="17" stroke="#333333" width="17" x="0.5" y="0.5"></rect>
                        <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="1.5"></path>
                      </svg>
                      <span className="font-body-md text-body-md text-on-surface">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-primary text-background font-label-sm text-label-sm uppercase tracking-widest py-md px-lg rounded-full flex items-center justify-center gap-sm hover:opacity-90 transition-all duration-300 active:scale-95 group-hover:translate-y-[-4px]">
                LET'S TALK
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
