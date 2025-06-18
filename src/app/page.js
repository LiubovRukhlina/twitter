"use client";

import NewTweetInput from "@/components/NewTweetInput";
import TweetCard from "@/components/TweetCard";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

async function getTweets() {
  const res = await fetch("https://dummyjson.com/posts");
  return res.json();
}

export default function Home() {
  const tweets = getTweets();
  const { user } = useAuth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>Hi, ${user ? user.username : "Stranger"}</div>
        <h1>Latest tweets</h1>
        <NewTweetInput />
        <div>
          <ul>
            {tweets.posts.map((tweet) => (
              <Link href={`/tweet/${tweet.id}`} key={tweet.id}>
                <TweetCard tweet={tweet} />
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
