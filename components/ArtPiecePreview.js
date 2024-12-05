import HeartRed from "../assets/heartRed.svg";
import Heart from "../assets/heart.svg";

export default function ArtPiecePreview({ piece, onToggleLiked, isLiked }) {
  return (
    <>
      <div className="art-piece-preview">
        <h3>{piece.artist}</h3>
        <img
          src={piece.imageSource}
          alt={piece.name}
          height="300"
          width="300"
        />
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
