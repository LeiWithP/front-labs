import { createContext } from "react";
import { ReviewShape } from "../types";
import { useReviews } from "../hooks/useReviews";

interface ReviewsContextType {
  reviews: Array<ReviewShape>;
  createReview: (newReview: ReviewShape) => void;
}

export const ReviewsContext = createContext<ReviewsContextType | null>(null);

// export const useReviewsContext = () => {
//   const context = useContext(ReviewsContext);
//   if (!context) {
//     throw new Error("useReviewsContext must be use with a ReviewsContext");
//   }
//   return context;
// };

export const ReviewsProvider = ({ children }: React.PropsWithChildren) => {
  const { reviews, createReview }: ReviewsContextType = useReviews();

  return (
    <ReviewsContext.Provider value={{ reviews, createReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};
