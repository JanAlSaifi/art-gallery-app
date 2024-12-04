import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ artPieces }) {
  if (!artPieces) return null;

  const randomIndex = Math.floor(Math.random() * artPieces.length - 1);
  const randomArt = artPieces[randomIndex];

  return (
    <>
      <ul>
        <li>
          <ArtPiecePreview piece={randomArt} />
        </li>
      </ul>
    </>
  );
}
