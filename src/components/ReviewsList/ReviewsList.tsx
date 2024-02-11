import "./ReviewsList.css";
import Review from "../Review/Review";
import { ReviewShape } from "../../types";

interface ReviewsListProps {
  reviews: Array<ReviewShape>;
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <ul className="comment-list">
      {reviews &&
        reviews.map((review) => {
          return <Review key={review.id} comment={review} />;
        })}
    </ul>
  );
};

export default ReviewsList;
