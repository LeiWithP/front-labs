import { useState, useEffect } from "react";
import { ReviewShape } from "../types";

const REVIEWS_URL = "http://localhost:3000/reviews";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Array<ReviewShape>>([]);

  useEffect(() => {
    fetch(REVIEWS_URL)
      .then((jsonRes) => jsonRes.json() as Promise<Array<ReviewShape>>)
      .then((response) => setReviews(response))
      .catch((error) => console.error(error));
  }, []);

  return { reviews };
};
