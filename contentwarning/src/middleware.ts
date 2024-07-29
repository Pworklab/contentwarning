import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18-config";
import { matchLocale } from "locale-matcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Transform headers for Negotiator
  const negotiatorHeaders = Object.fromEntries(request.headers.entries());

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(i18n.locales as string[]);
  
  // Adjusted matchLocale call
  const locale = matchLocale(languages, i18n.locales as string[]);
  
  // Ensure locale is a string
  return typeof locale === 'string' ? locale : undefined;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request) || i18n.defaultLocale;

    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
