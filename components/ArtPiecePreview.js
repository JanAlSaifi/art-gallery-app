export default function ArtPiecePreview({ piece }) {
  return (
    <div>
      <img>{piece.imageSource}</img>
      <h2>{piece.artist}</h2>
      <p>{piece.name}</p>
    </div>
  );
}
