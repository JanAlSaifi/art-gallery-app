import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ artPieces }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>No art pieces available.</p>;
  }

  const randomIndex = Math.floor(Math.random() * artPieces.length - 1);
  const randomArt = artPieces[randomIndex];

  return (
    <ul>
      <li>
        <ArtPiecePreview piece={randomArt} />
      </li>
    </ul>
  );
}
