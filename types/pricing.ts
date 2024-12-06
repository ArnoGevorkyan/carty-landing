export type PricingTierData = {
  id?: string;
  name?: string;
  title: string;
  description: string;
  price: number;
  prevPrice?: number;
  features: string[];
  isPopular?: boolean;
  isFree?: boolean;
  index?: number;
  buttonText?: string;
  priceId?: string;
};
