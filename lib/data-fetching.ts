import { createClient } from '@/utils/supabase/server';
import { User } from '@supabase/supabase-js';

type GetUserResult = {
  user: User | null;
};

type GetUserAndSubscriptionResult = {
  user: User | null;
  subscription: any | null; // Using 'any' for now since we haven't defined the subscription type
  redirect: string | null;
  openAppQueryParams: string | URLSearchParams | null;
};

export async function getUser(): Promise<GetUserResult> {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    user,
  };
}

export async function getUserAndSubscription(): Promise<GetUserAndSubscriptionResult> {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      user: null,
      subscription: null,
      redirect: '/signin',
      openAppQueryParams: null,
    };
  }

  // For now, return basic user info without subscription
  // You can expand this later to include actual subscription data
  return {
    user,
    subscription: null,
    redirect: null,
    openAppQueryParams: null,
  };
}
