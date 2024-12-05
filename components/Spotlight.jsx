import { useEffect, useState } from "react";

import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ artPieces, onToggleLiked, isLiked }) {
  const [randomArt, setRandomArt] = useState([]);
  console.log("Das ist Component: ", isLiked, onToggleLiked);
  console.log(randomArt);
  useEffect(() => {
    setRandomArt(handleRandomArt());
  }, []);

  if (!artPieces || artPieces.length === 0) {
    return <p>No art pieces available.</p>;
  }

  function handleRandomArt() {
    const randomIndex = Math.floor(Math.random() * artPieces.length - 1);
    return artPieces[randomIndex];
  }

  return (
    <>
      <ul>
        <li>
          <ArtPiecePreview
            piece={randomArt}
            onToggleLiked={onToggleLiked}
            isLiked={isLiked[randomArt.slug]}
          />
        </li>
      </ul>
    </>
  );
}
