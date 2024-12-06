import type { Subscription } from '@/types/subscription';
import type { UsageType } from '@/components/dashboard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { User } from '@supabase/auth-js';

interface SubscriptionCardProps {
  subscription: Subscription | null;
  usage: UsageType;
  openAppQueryParams: string | URLSearchParams;
  user: User;
  loading: boolean;
}

export default function SubscriptionCard({
  subscription,
  usage,
  openAppQueryParams,
  user,
  loading,
}: SubscriptionCardProps) {
  if (!subscription) {
    return (
      <Card className="overflow-auto bg-gray-100/10">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Subscription</CardTitle>
          <CardDescription>No active subscription</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="overflow-auto bg-gray-100/10">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Subscription</CardTitle>
        <CardDescription>Your subscription details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Plan</p>
            <p className="text-sm capitalize">{subscription.pricing_tier}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Status</p>
            <p className="text-sm capitalize">{subscription.status}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Period</p>
            <p className="text-sm">
              {new Date(subscription.current_period_start).toLocaleDateString()}{' '}
              - {new Date(subscription.current_period_end).toLocaleDateString()}
            </p>
          </div>
          {subscription.cancel_at_period_end && (
            <div>
              <p className="text-sm font-medium text-red-500">
                Subscription will be canceled at the end of the current period
              </p>
            </div>
          )}
          {usage.percent_credit_used !== null && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Usage</p>
              <p className="text-sm">
                {usage.percent_credit_used}% of credits used
              </p>
            </div>
          )}
          {usage.remaining_topup_credits !== null && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Remaining Top-up Credits
              </p>
              <p className="text-sm">{usage.remaining_topup_credits} credits</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
