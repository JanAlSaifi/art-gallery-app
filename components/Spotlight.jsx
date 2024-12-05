import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ artPieces, onToggleLiked, isLiked }) {
  if (!artPieces) return null;

  const randomIndex = Math.floor(Math.random() * artPieces.length - 1);
  const randomArt = artPieces[randomIndex];

  return (
    <>
      <ul>
        <li>
          <ArtPiecePreview
            piece={randomArt}
            onToggleLiked={onToggleLiked}
            isLiked={isLiked}
          />
        </li>
      </ul>
    </>
  );
}
