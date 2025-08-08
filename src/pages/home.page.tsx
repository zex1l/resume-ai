import { Container } from '@/widgets/container';
import { Faq } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';
import { Introduce } from '@/widgets/introduce';
import { Pricing } from '@/widgets/pricing';

export const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Introduce />
      <Pricing />
      <Faq />
    </Container>
  );
};
