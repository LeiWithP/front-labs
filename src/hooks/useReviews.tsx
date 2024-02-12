import { useState, useEffect } from "react";
import { ReviewShape } from "../types";

const REVIEWS_URL = "http://localhost:3000/reviews";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Array<ReviewShape>>([]);
  const [updateList, setUpdateList] = useState(true);

  const deleteReview = (id: number) => {
    fetch(`${REVIEWS_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => setUpdateList(true))
      .catch((error) => console.error(error));
    console.log(id);
  };

  const updateReview = (id: number) => {
    fetch(`${REVIEWS_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => setUpdateList(true))
      .catch((error) => console.error(error));
    console.log(id);
  };

  const createReview = async (newReview: ReviewShape) => {
    try {
      await fetch(REVIEWS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newReview.email,
          review: newReview.review,
        }),
      });
      return setUpdateList(true);
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
