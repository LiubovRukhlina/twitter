import { makeSureDbIsReady } from "@/lib/db";
import { Company, Tweet } from "@/models/models";
import { NextResponse, NextRequest } from "next/server";
import fs from "node:fs/promises";
/**
 * @param {NextRequest} request
 */

export async function GET(request) {
  await makeSureDbIsReady();
  const tweets = await Tweet.find({}).sort({ createdAt: -1 });
  return NextResponse.json(tweets);
}
export async function POST(request) {
  await makeSureDbIsReady();
  const body = await request.json();

  const tweet = new Tweet({
    author: body.author,
    content: body.content,
  });

  tweet.save();

  return NextResponse.json(tweet);
}
