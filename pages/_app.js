import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import useSWR from "swr";

// fetcher-Funktion
export async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading data...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieces={data} />
      <Navigation />
    </>
  );
}
