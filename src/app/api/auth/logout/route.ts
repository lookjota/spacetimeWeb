import { NextResponse, NextRequest } from "next/server"
// import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'set-Cookie': `token=; Path=/; max-age=0;`,
    }
  })
}
