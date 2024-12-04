import { useLayoutEffect } from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ artPieces }) {
  return (
    <ul>
      {artPieces.map((piece) => {
        <li key={piece.id}>
          <ArtPiecePreview piece={piece} />
        </li>;
      })}
    </ul>
  );
}
