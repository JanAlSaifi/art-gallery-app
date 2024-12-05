import { useRouter } from "next/router";
import CommentForm from "./CommentForm";

export default function ArtworkDetail({ artPiece, onAddEntry, comments }) {
  console.log("artpiece", artPiece);
  return (
    <>
      <div>
        <h1>{artPiece.name}</h1>
        <img
          src={artPiece.imageSource}
          alt={artPiece.name}
          height="300"
          width="300"
        />
        <p>{artPiece.artist}</p>
        <p>{artPiece.description}</p>
      </div>
      <div>{comments}</div>
      <div>
        <CommentForm onAddEntry={onAddEntry} />
      </div>
    </>
  );
}
