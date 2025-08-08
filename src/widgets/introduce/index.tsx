import { CardList } from '@/shared/ui/card-list';
import { cardsData } from './card.data';
import { IntroduceCard } from './introduce-card';
import { IntroduceLayout } from './introduce-layout';

export const Introduce = () => {
  return (
    <IntroduceLayout
      title={
        <h2 className="text-center text-4xl font-bold">
          Everything you need to stand out
        </h2>
      }
      description={
        <p className="text-gray-400 text-center">
          From behavioral questions to algorithm challenges, we simulate real
          interviews and provide laser-focused feedback.
        </p>
      }
      cards={
        <CardList
          cards={
            <>
              {cardsData.map((card, key) => (
                <IntroduceCard
                  key={key}
                  title={card.title}
                  description={card.description}
                  icon={<card.icon className="w-6 h-6" />}
                />
              ))}
            </>
          }
        />
      }
    />
  );
};
