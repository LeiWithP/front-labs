import { useState, useEffect } from "react";
import { ReviewShape } from "../types";

const initData = [
  { id: 1, email: "mario@mail.com", review: "Lorem ipsum mario" },
  { id: 2, email: "karla@mail.com", review: "Lorem ipsum karla" },
  { id: 4, email: "oracio@mail.com", review: "Lorem ipsum oracio" },
  { id: 5, email: "luis@mail.com", review: "Lorem ipsum luis" },
  { id: 7, email: "miriam@mail.com", review: "Lorem ipsum miriam" },
  { id: 8, email: "jesus@mail.com", review: "Lorem ipsum jesus" },
  { id: 9, email: "august@mail.com", review: "Lorem ipsum august" },
  { id: 10, email: "molinete@mail.com", review: "Lorem ipsum molinete" },
  { id: 11, email: "alice@mail.com", review: "Lorem ipsum alice" },
];

export const useReviews = () => {
  const [reviews, setReviews] = useState<Array<ReviewShape>>([]);

  useEffect(() => {
    setReviews(initData);
  }, []);

  return { reviews };
};
