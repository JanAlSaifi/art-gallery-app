import ArtPieceList from "../components/ArtPieceList";
import Spotlight from "@/components/spotlightPage";

export default function GalleryPage({ artPieces }) {
  return (
    <div>
      <h1>GALLERY</h1>
      <ArtPieceList artPieces={artPieces}></ArtPieceList>
      <Spotlight />
    </div>
  );
}

export async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
