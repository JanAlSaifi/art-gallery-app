import Link from "next/link";
import HeartRed from "../assets/heartRed.svg";
import Heart from "../assets/heart.svg";

export default function ArtPiecePreview({ piece, onToggleLiked, isLiked }) {
  console.log("Hier ist die Previewseite: ", isLiked);
  if (!piece) {
    return <p>Art piece data is missing!</p>;
  }
  return (
    <>
      <div className="art-piece-preview">
        <h3>{piece.artist}</h3>
        <Link href={`/${piece.slug}`}>
          <img
            src={piece.imageSource}
            alt={piece.name}
            height="300"
            width="300"
          />
        </Link>
        <p>{piece.name}</p>
      </div>
      <div>
        <button
          className="favorite-button"
          onClick={() => onToggleLiked(piece.slug)}
        >
          {isLiked ? <HeartRed /> : <Heart />}
        </button>
      </div>
    </>
  );
}
