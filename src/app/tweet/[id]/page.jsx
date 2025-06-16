import TweetCard from "@/components/TweetCard";

async function getTweet(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}

export default async function TweetDetail({ params }) {
  const data = await params;
  const tweet = await getTweet(data.id);

  return (
    <main>
      <h3 className="text-lg font-bold">{tweet.title}</h3>
      <div>{tweet.body}</div>
      <p className="text-sm text-gray-600 mt-4">
        👍: {tweet.reactions.likes} | 👎: {tweet.reactions.dislikes}
      </p>
      <p className="pt-2">{tweet.tags.join(", ")}</p>
    </main>
  );
}
