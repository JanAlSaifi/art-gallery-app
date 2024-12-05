import ArtworkDetail from "@/components/ArtworkDetail";
import { useRouter } from "next/router";

export default function ArtworkPage({ artPieces }) {
  const router = useRouter();
  const { artwork } = router.query;

  if (!artwork) return <div>Loading...</div>;

  const artPiece = artPieces.find((piece) => piece.slug === artwork);

  if (!artPiece) return <p>Art piece not found!</p>;

  return <ArtworkDetail artPiece={artPiece} />;
}
