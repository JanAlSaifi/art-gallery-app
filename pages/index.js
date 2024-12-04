import Spotlight from "@/components/Spotlight.jsx";

export default function HomePage({ artPieces }) {
  return (
    <div>
      <h1>A random Artpiece</h1>
      <Spotlight artPieces={artPieces} />
    </div>
  );
}
