import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_ORIGIN = 'https://hrcoordinators.com';

export function proxy(request: NextRequest) {
  const cloudflareVisitor = request.headers.get('cf-visitor') ?? '';
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',', 1)[0]?.trim().toLowerCase();
  const cloudflareProtocol = cloudflareVisitor.match(/"scheme"\s*:\s*"(https?)"/i)?.[1]?.toLowerCase();
  const visitorProtocol = cloudflareProtocol ?? forwardedProtocol;
  const requestHost = request.headers.get('host')?.split(':', 1)[0]?.toLowerCase();
  const isProductionHost = requestHost === 'hrcoordinators.com' || requestHost === 'www.hrcoordinators.com';
  const needsCanonicalRedirect = isProductionHost && (requestHost === 'www.hrcoordinators.com' || visitorProtocol === 'http');

  if (!needsCanonicalRedirect) {
    return NextResponse.next();
  }

  const destination = new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, CANONICAL_ORIGIN);
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/:path*',
};
