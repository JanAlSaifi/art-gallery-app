import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ artPieces }) {
  return (
    <ul>
      <li>
        <ArtPiecePreview piece={artPieces} />
      </li>
    </ul>
  );
}
