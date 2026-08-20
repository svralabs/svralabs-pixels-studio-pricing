import { ChevronRight } from 'lucide-react';

export default function PricingCard({ title, description, price, priceLabel, features, buttonText }) {
  return (
    <div className="bg-surface rounded-[24px] p-lg relative dotted-border transition-all duration-300 hover:border-white/40 group">
      <div className="corner-tick tick-tl"></div>
      <div className="corner-tick tick-tr"></div>
      <div className="corner-tick tick-bl"></div>
      <div className="corner-tick tick-br"></div>
      <div className="flex flex-col h-full">
        <div className="mb-lg">
          <h3 className="font-h2 text-[2rem] text-primary mb-sm">{title}</h3>
          <p className="font-body-md text-secondary max-w-md">{description}</p>
        </div>
        <div className="mb-xl">
          <div className="flex items-baseline gap-xs">
            <span className="font-h1 text-[3rem] text-primary">{price}</span>
            <span className="font-label-sm text-secondary uppercase tracking-widest">{priceLabel}</span>
          </div>
        </div>
        <div className="flex-grow">
          <ul className="space-y-md">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="font-body-md">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-lg">
          <button className="w-full sm:w-auto bg-primary text-background font-label-sm py-sm px-lg rounded-full flex items-center justify-center gap-xs hover:opacity-90 transition-all active:scale-[0.98]">
            {buttonText}
            <ChevronRight className="text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
