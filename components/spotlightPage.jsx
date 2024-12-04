import ArtPiecePreview from "./ArtPiecePreview";

function getRandomArtPiece() {}

export default function Spotlight({ artPieces }) {
  return (
    <ul>
      <li>
        <ArtPiecePreview piece={artPieces} />
      </li>
    </ul>
  );
}
