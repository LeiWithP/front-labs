import "./Review.css";
import { ReviewShape } from "../../types";

interface ReviewProps {
  reviewData: ReviewShape;
  // deleteReview: (id: number) => void;
}

const Review = ({ reviewData }: ReviewProps) => {
  const handleEdit = () => {
    alert("Edit");
  };

  const handleDelete = () => {
    if (reviewData.id) {
      // deleteReview(reviewData.id);
    }
  };

  return (
    <div className="review-box">
      <p className="email">{reviewData.email}</p>
      <p className="review">{reviewData.review}</p>
      <span className="options-tab">
        <a href="#" onClick={handleEdit}>
          Edit
        </a>
        <a href="#" onClick={handleDelete}>
          Delete
        </a>
      </span>
    </div>
  );
};

export default Review;
