// components/Navigation.jsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
