import { CardList } from '@/shared/ui/card-list';
import { PricingLayout } from './pricing-layout';
import { cardsData } from './card.data';
import { PricingCard } from './pricing-card';

export const Pricing = () => {
  return (
    <PricingLayout
      title={
        <h2 className="text-4xl font-bold text-center">Simple, transparent pricing</h2>
      }
      description={
        <p className="text-gray-400 text-center">
          Get started for free. Upgrade anytime as you grow.
        </p>
      }
      cards={
        <CardList
          cards={
            <>
              {cardsData.map((card, key) => (
                <PricingCard key={key} {...card} />
              ))}
            </>
          }
        />
      }
    />
  );
};
