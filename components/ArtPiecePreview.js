import Link from "next/link";

export default function ArtPiecePreview({ piece }) {
  if (!piece) {
    return <p>Art piece data is missing!</p>;
  }
  return (
    <div className="art-piece-preview">
      <h3>{piece.artist}</h3>
      <Link href={`/${piece.slug}`}>
        <img
          src={piece.imageSource}
          alt={piece.name}
          height="300"
          width="300"
        />
      </Link>
      <p>{piece.name}</p>
    </div>
  );
}
