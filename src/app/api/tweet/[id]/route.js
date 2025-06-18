import { Tweet } from "@/models/models";
import { makeSureDbIsReady } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await makeSureDbIsReady();
  const { id } = await params;
  const tweet = await Tweet.findById(id);
  if (!tweet) {
    return NextResponse.json({ error: "Tweet not found" }, { status: 404 });
  }
  return NextResponse.json(tweet);
}

export async function DELETE(request, { params }) {
  await makeSureDbIsReady();
  const { id } = await params;
  const deleted = await Tweet.findByIdAndDelete(id);

  return NextResponse.json(deleted);
}
