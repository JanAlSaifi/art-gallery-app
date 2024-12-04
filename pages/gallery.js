import ArtPieceList from "../components/ArtPieceList";
import useSWR from "swr";

// fetcher-Funktion
export async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default function GalleryPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log("Fetched data:", data);

  if (error) return <div>Error loading data...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>GALLERY</h1>
      <ArtPieceList artPieces={data} />
    </div>
  );
}
