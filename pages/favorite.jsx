import ArtPieceFavoriteList from "@/components/ArtPieceFavoriteList";

export default function Favorite({ artPieces, onToggleLiked, isLiked }) {
  return (
    <>
      <div>
        <h1>My Favorites</h1>
        <ArtPieceFavoriteList
          artPieces={artPieces}
          onToggleLiked={onToggleLiked}
          isLiked={isLiked}
        ></ArtPieceFavoriteList>
      </div>
    </>
  );
}
