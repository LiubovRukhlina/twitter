import { NextResponse, NextRequest } from "next/server";
import fs from "node:fs/promises";
/**
 * @param {NextRequest} request
 */
// export async function GET(request) {
//   console.log("Request to", request.url);
//   return NextResponse.json({ ping: "pong" });
// }

// You will get an error in the above code if this file does not exist.

export async function GET(request) {
  const data = await fs.readFile(
    "/Users/zsgast2/Documents/ReDi/nextproject/twitter-app/public/note.txt",
    { encoding: "utf8" }
  );

  return NextResponse.json({ data });
}

export async function POST(request) {
  const body = await request.json();
  console.log("Request body", body);

  return NextResponse.json({});
}
