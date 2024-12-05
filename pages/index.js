import Spotlight from "@/components/Spotlight.jsx";

export default function HomePage({ artPieces, isLiked, onToggleLiked }) {
  return (
    <div>
      <h1>A random Artpiece</h1>
      <Spotlight
        artPieces={artPieces}
        onToggleLiked={onToggleLiked}
        isLiked={isLiked}
      />
    </div>
  );
}
