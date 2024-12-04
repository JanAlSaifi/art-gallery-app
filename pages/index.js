import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Link href="/gallery">Go to Gallery</Link>
    </div>
  );
}
