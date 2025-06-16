export default function TweetCard({ tweet }) {
  return (
    <li className="mx-auto border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg my-4 bg-white transition-all duration-300">
      <div className="userAvatar w-[50px] shrink-0 relative">
        <img src="/no-profile-pic.jpg" />
      </div>
      <h3 className="text-lg font-bold">{tweet.title}</h3>
      <div>{tweet.body}</div>
      <div className="flex justify-between mt-6 text-center font-bold">
        <p className="text-sm text-gray-600">
          👍: {tweet.reactions.likes} | 👎: {tweet.reactions.dislikes}
        </p>
        <p className="text-blue-400">{tweet.tags.join(", ")}</p>
      </div>
      <button className="w-[20px]"></button>
      <button className="w-[20px]"></button>
      <button className="w-[20px]"></button>
    </li>
  );
}
