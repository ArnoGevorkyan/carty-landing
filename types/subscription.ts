export type Subscription = {
  subscription_id: string;
  pricing_tier: string;
  status: string;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  canceled_at?: string | null;
};
