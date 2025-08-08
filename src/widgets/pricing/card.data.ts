import type { PricingCardType } from './pricing-card';

export const cardsData: PricingCardType[] = [
  {
    type: 'starter',
    price: 0,
    features: ['2 mock interviews', '1 résumé scan'],
    button: { text: 'Get started', link: '/pricing' },
  },

  {
    type: 'pro',
    price: 19,
    features: ['Unlimited interviews', 'Unlimited scans', 'Detailed analytics'],
    button: { text: 'Start free trial', link: '/pricing' },
  },

  {
    type: 'enterprise',
    price: 49,
    features: ['5 seats', 'Admin dashboard', 'Priority support'],
    button: { text: 'Cantacts sales', link: '/pricing' },
  },
];
