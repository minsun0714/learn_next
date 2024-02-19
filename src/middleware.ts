import { NextRequest, NextResponse } from "next/server";
import React from "react";

const middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname === "/contact") {
    console.log("contact page");
    return NextResponse.redirect(new URL("/", req.url));
  }
  console.log("middleware");
};

export const config = {
  matcher: ["/products/:path*", "/contact"],
};

export default middleware;
