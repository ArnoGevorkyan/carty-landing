import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';
import { createClient } from '@/utils/supabase/server';

export async function middleware(request: NextRequest) {
  try {
    // update the session if possible
    let response;
    try {
      response = await updateSession(request);
    } catch (error) {
      console.warn('Session update failed:', error);
      response = NextResponse.next();
    }

    // Check if the route should be protected
    const protectedPaths = ['/api'];
    const excludedPaths = ['/api/download', '/api/signup'];
    const isProtectedRoute = protectedPaths.some(path =>
      request.nextUrl.pathname.startsWith(path)
    );
    const isExcludedRoute = excludedPaths.some(path =>
      request.nextUrl.pathname.startsWith(path)
    );

    if (isProtectedRoute && !isExcludedRoute) {
      try {
        const supabase = createClient();
        const {
          data: { session },
        } = await supabase.auth.refreshSession();

        if (!session) {
          return NextResponse.redirect(new URL('/signin', request.url));
        }
      } catch (error) {
        console.warn('Auth check failed:', error);
        return NextResponse.redirect(new URL('/signin', request.url));
      }
    }

    return response;
  } catch (error) {
    // If anything fails, allow the request to continue
    console.warn('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
