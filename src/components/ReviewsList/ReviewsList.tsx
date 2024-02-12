import "./ReviewsList.css";
import Review from "../Review/Review";
import { useContext } from "react";
import { ReviewsContext } from "../../providers/ReviewsProvider";
// import { ReviewShape } from "../../types";

// interface ReviewsListProps {
//   reviews: Array<ReviewShape>;
// }

// const ReviewsList = ({ reviews }: ReviewsListProps) => {
const ReviewsList = () => {
  const reviewsContext = useContext(ReviewsContext);

  return (
    <ul className="comment-list">
      {reviewsContext &&
        reviewsContext.reviews.map((review) => {
          return <Review key={review.id} reviewData={review} />;
        })}
    </ul>
  );
};

export default ReviewsList;
