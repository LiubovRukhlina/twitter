import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-300 text-white py-4 px-6 shadow-md">
      <h1>Twitter Clone</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
