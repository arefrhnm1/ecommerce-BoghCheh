import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;

	if (token) {
		return NextResponse.next();
	}

	const url = new URL(req.url);
	url.pathname = "/login";

	return NextResponse.redirect(url.toString());
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
