import { createClient } from '@/utils/supabase/server';
import { User } from '@supabase/supabase-js';

type GetUserResult = {
  user: User | null;
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
