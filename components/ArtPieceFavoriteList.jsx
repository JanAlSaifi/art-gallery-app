import { useLayoutEffect } from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceFavoriteList({
  artPieces,
  onToggleLiked,
  isLiked,
}) {
  const likedPieces = artPieces.filter((piece) => isLiked[piece.slug]);

  return (
    <ul>
      {likedPieces.map((piece) => {
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
