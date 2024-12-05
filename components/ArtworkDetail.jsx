import { useRouter } from "next/router";

export default function ArtworkDetail({ artPiece }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>{artPiece.name}</h1>
      <img
        src={artPiece.imageSource}
        alt={artPiece.name}
        height="300"
        width="300"
      />
      <p>
        <strong>Artist:</strong> {artPiece.artist}
      </p>

      {artPiece.year && (
        <p>
          <strong>Year:</strong> {artPiece.year}
        </p>
      )}

      {artPiece.dimensions && (
        <p>
          <strong>Dimensions:</strong>{" "}
          {artPiece.dimensions.height &&
          artPiece.dimensions.width &&
          artPiece.dimensions.type
            ? `${artPiece.dimensions.height} x ${artPiece.dimensions.width} ${artPiece.dimensions.type}`
            : "N/A"}
        </p>
      )}

      <button onClick={goBack}>BACK</button>
    </div>
  );
}
