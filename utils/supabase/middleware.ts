import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('Supabase credentials not found');
      return response;
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            try {
              request.cookies.set({
                name,
                value,
                ...options,
              });
              response = NextResponse.next({
                request: {
                  headers: request.headers,
                },
              });
              response.cookies.set({
                name,
                value,
                ...options,
              });
            } catch (error) {
              console.warn('Error setting cookie:', error);
            }
          },
          remove(name: string, options: CookieOptions) {
            try {
              request.cookies.set({
                name,
                value: '',
                ...options,
              });
              response = NextResponse.next({
                request: {
                  headers: request.headers,
                },
              });
              response.cookies.set({
                name,
                value: '',
                ...options,
              });
            } catch (error) {
              console.warn('Error removing cookie:', error);
            }
          },
        },
      }
    );

    try {
      await supabase.auth.getUser();
    } catch (error) {
      console.warn('Error getting user:', error);
    }

    return response;
  } catch (error) {
    console.warn('Supabase middleware error:', error);
    return NextResponse.next();
  }
}
