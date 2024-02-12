import "./Review.css";
import { ReviewShape } from "../../types";

interface ReviewProps {
  reviewData: ReviewShape;
  onDelete: (id: number) => void;
  onUpdate: (editedReview: ReviewShape) => void;
}

const Review = ({ reviewData, onDelete, onUpdate }: ReviewProps) => {
  const handleEdit = () => {
    onUpdate(reviewData);
  };

  const handleDelete = () => {
    if (reviewData.id) {
      onDelete(reviewData.id);
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
