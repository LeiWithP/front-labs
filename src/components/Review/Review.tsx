import "./Review.css";
import { ReviewShape } from "../../types";

interface ReviewProps {
  comment: ReviewShape;
}

const Review = ({ comment }: ReviewProps) => {
  return (
    <div className="review-box">
      <p className="email">{comment.email}</p>
      <p className="review">{comment.review}</p>
      <span className="options-tab">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </span>
    </div>
  );
};

export default Review;
