import { useState, useEffect } from "react";
import { ReviewShape } from "../types";

const REVIEWS_URL = "http://localhost:3000/reviews";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Array<ReviewShape>>([]);
  const [updateList, setUpdateList] = useState(true);

  const deleteReview = async (id: number) => {
    try {
      const response = await fetch(`${REVIEWS_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUpdateList(true);
      return response;
    } catch (error) {
      return console.error(error);
    }
  };

  const updateReview = async (newReview: ReviewShape) => {
    try {
      const response = await fetch(`${REVIEWS_URL}/${newReview?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newReview.email,
          review: newReview.review,
        }),
      });
      setUpdateList(true);
      return response;
    } catch (error) {
      return error;
    }
  };

  const createReview = async (newReview: ReviewShape) => {
    try {
      const response = await fetch(REVIEWS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newReview.email,
          review: newReview.review,
        }),
      });
      setUpdateList(true);
      return response;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (updateList) {
      console.log("Effect");
      fetch(REVIEWS_URL)
        .then((jsonRes) => jsonRes.json() as Promise<Array<ReviewShape>>)
        .then((response) => setReviews(response))
        .catch((error) => console.error(error))
        .finally(() => setUpdateList(false));
    }
  }, [updateList]);

  return { reviews, createReview, deleteReview, updateReview };
};
