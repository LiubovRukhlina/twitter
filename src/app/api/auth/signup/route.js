import { makeSureDbIsReady } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  await makeSureDbIsReady();
  const { username, password } = await request.json();
  const user = await User.create({ username, password });
  return NextResponse.json({ id: user._id, username: user.username });
}
