import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

function FiveStarRating({ rating }) {
  const starList = [];

  const startFillCount = Math.floor(rating);

  const hasHalfStar = (rating = parseInt(rating) >= 0.5);

  const emptyStarCount = 5 - startFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= startFillCount; i++) {
    starList.push(
      <StarFill key={"star-fill" + i} style={{ color: "hsl(60, 100%, 50%)" }} />
    );
  }

  if (hasHalfStar) {
    starList.push(
      <StarHalf key={"half-star"} style={{ color: "hsl(60, 100%, 50%)" }} />
    );
  }

  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<Star key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}

export default FiveStarRating;
