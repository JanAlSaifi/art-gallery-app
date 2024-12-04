export default function ArtPiecePreview({ piece }) {
  return (
    <div className="art-piece-preview">
      <h3>{piece.artist}</h3>
      <img src={piece.imageSource} alt={piece.name} height="300" width="300" />
      <p>{piece.name}</p>
    </div>
  );
}
