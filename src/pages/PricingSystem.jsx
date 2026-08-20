import PricingCard from '../components/PricingCard';

export default function PricingSystem() {
  const pricingPlans = [
    {
      title: '2-week design sprint',
      description: 'One focused build. A landing page, dashboard, brand starter, or up to 8 mobile screens.',
      price: '$2,500',
      priceLabel: '(One-time)',
      features: [
        'Landing page that converts',
        'Dashboard built for daily use',
        'Mobile app (up to 8 screens)',
        'Pitch deck to win the round'
      ],
      buttonText: "LET'S TALK"
    },
    {
      title: 'Ongoing partnership',
      description: 'A dedicated design team. Unlimited output. Design, strategy, and no-code delivery — on retainer.',
      price: '$5,000',
      priceLabel: '(/month)',
      features: [
        'Work directly with the founder (no handoffs)',
        'Unlimited design requests & revisions',
        '48-hour turnarounds (weekdays)',
        'Weekly strategy calls + Slack integration'
      ],
      buttonText: "LET'S TALK"
    }
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-max-width mx-auto flex justify-between items-center px-lg py-md">
          <div className="font-h2 text-[1.5rem] tracking-tighter text-primary">
            PIXELS STUDIO
          </div>
          <div className="hidden md:flex items-center gap-md">
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">WORK</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold" href="#">SERVICES</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">INFORMATION</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">CONTACT</a>
          </div>
          <div className="flex items-center gap-sm">
            <a className="hidden sm:block font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">TWITTER</a>
            <a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200" href="#">EMAIL</a>
          </div>
        </div>
      </nav>
      <main className="pt-xl">
        <section className="max-w-max-width mx-auto px-lg mt-xl mb-xl">
          <div className="relative w-full h-[204px] overflow-hidden opacity-30 mb-md"></div>
          <div className="inline-block relative mb-md">
            <div className="dotted-border px-sm py-xs font-label-sm text-label-sm uppercase tracking-widest text-primary">
              SERVICES
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 flex items-center justify-center">
              <div className="w-full h-[1px] bg-primary absolute"></div>
              <div className="h-full w-[1px] bg-primary absolute"></div>
            </div>
          </div>
          <h1 className="font-h1 text-h1 max-w-4xl leading-tight">
            A sprint to ship one thing well, or a retainer for everything after.
          </h1>
        </section>
        <section className="max-w-max-width mx-auto px-lg pb-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                priceLabel={plan.priceLabel}
                features={plan.features}
                buttonText={plan.buttonText}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
