import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

// fetcher-Funktion
export async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default function App({ Component, pageProps }) {
  const [isLiked, setIsLiked] = useLocalStorageState("isLiked", {
    defaultValue: {},
  });
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading data...</div>;
  if (isLoading) return <div>Loading...</div>;

  // handleFavIcon
  function handleToggleFavoriteIcon(slug) {
    setIsLiked((prevLiked) => ({
      ...prevLiked,
      [slug]: !prevLiked[slug],
    }));
    console.log("triggerd");
  }

  function handleAddEntry(newComment) {
    setComments([newComment, ...comments]);
  }

  // handleOnSubmit [{ ...newComment }, ...comment]

  // function handleOnSubmit(comment) {
  //   setIsCommented((prevComment) => ({
  //     ...prevComment,
  //     [comment]: !prevComment[comment],
  //   }));
  // }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={data}
        onToggleLiked={handleToggleFavoriteIcon}
        isLiked={isLiked}
        onAddEntry={handleAddEntry}
        comments={comments}
      />
      <Navigation />
    </>
  );
}
