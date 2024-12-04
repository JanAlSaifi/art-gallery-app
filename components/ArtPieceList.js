import { useLayoutEffect } from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ artPieces }) {
  return (
    <ul>
      {artPieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview piece={piece} />
          </li>
        );
      })}
    </ul>
  );
}
