import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("/login/handler/route.ts GET");
  console.log(request);

  return NextResponse.json({ hello: "world" });
}
