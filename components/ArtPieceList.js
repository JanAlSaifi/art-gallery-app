import { useLayoutEffect } from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ artPieces }) {
  return (
    <ul>
      <li>
        <ArtPiecePreview piece={piece} />
      </li>
    </ul>
  );
}
