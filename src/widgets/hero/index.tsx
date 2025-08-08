import { Button } from '@/shared/ui/button';
import { HeroContent } from './hero-content';
import { HeroLayout } from './hero-layout';
import { Link } from 'react-router-dom';
import { HeroBanner } from './hero-banner';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <HeroLayout
      left={
        <HeroContent
          title={
            <h1 className="text-4xl font-bold lg:text-5xl">
              Nail your next interview. Perfect your résumé.
            </h1>
          }
          description={
            <p className="text-gray-400">
              AI-powered practice sessions, actionable feedback, and detailed
              résumé scoring—everything you need to land the role faster.
            </p>
          }
          actions={
            <div className="flex items-center gap-5">
              <Button>Try for free</Button>
              <Link className="flex h-fit items-center gap-1" to={'/'}>
                See features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          }
        />
      }
      right={<HeroBanner />}
    />
  );
};
