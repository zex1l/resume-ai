import { Button } from '@/shared/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingCard = ({
  features,
  price,
  type,
  button,
}: PricingCardType) => {
  return (
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 hover:border-primary hover:bg-white/10">
      <div className="font-bold uppercase">{type}</div>
      <div className="font-bold text-3xl">
        ${price} <span className="text-gray-400 text-sm">/mo</span>
      </div>
      <div className="text-gray-400">
        <ul className="">
          {features.map((feature, key) => (
            <li className="text-white flex items-center gap-2" key={key}>
              <Check />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button className="mt-auto">
        <Link to={button.link}>{button.text}</Link>
      </Button>
    </div>
  );
};

export type PricingCardType = {
  type: 'starter' | 'pro' | 'enterprise';
  price: number;
  features: string[];
  button: {
    text: string;
    link: string;
  };
};
