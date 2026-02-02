import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAIN_DOMAIN = "hand-agency.ru";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const url = request.nextUrl.clone();

  if (host.startsWith("www.")) {
    url.host = MAIN_DOMAIN;
    url.protocol = request.nextUrl.protocol;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
