"use client";

export default function NewTweetInput() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const tweet = data.get("tweet");
    const response = await fetch("/api/tweet/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ tweet }),
    });
    const result = await response.json();
    console.log(result);
  };

  const getData = async () =>
    await fetch("/api/hello", {
      method: "GET",
    });

  const data = getData();

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        New Tweet: <input type="text" placeholder="your tweet" name="tweet" />
      </label>
      <hr />
      <button type="submit">Submit form</button>
    </form>
  );
}
