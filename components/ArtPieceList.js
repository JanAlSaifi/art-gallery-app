import { useLayoutEffect } from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ artPieces, onToggleLiked, isLiked }) {
  return (
    <ul>
      {artPieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              piece={piece}
              onToggleLiked={onToggleLiked}
              isLiked={isLiked[piece.slug]}
            />
          </li>
        );
      })}
    </ul>
  );
}
