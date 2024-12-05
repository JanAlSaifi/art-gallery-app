import ArtPieceList from "../components/ArtPieceList";

export default function GalleryPage({ artPieces, isLiked, onToggleLiked }) {
  return (
    <div>
      <h1>GALLERY</h1>
      <ArtPieceList
        artPieces={artPieces}
        onToggleLiked={onToggleLiked}
        isLiked={isLiked}
      />
    </div>
  );
}
