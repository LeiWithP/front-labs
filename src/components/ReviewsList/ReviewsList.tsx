import "./ReviewsList.css";
import Review from "../Review/Review";
import { useContext, useState } from "react";
import { ReviewsContext } from "../../providers/ReviewsProvider";
import Modal from "../Modal/Modal";

const ReviewsList = () => {
  const reviewsContext = useContext(ReviewsContext);
  const [selectedReview, setSelectedReview] = useState(-1);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = (id: number) => {
    console.log(id);
    setSelectedReview(id);
    setDeleting(true);
  };

  const handleAccept = () => {
    reviewsContext?.deleteReview(selectedReview).finally(() => {
      setSelectedReview(-1);
      setDeleting(false);
    });
  };

  const handleCancel = () => {
    setDeleting(false);
  };

  return (
    <>
      <ul className="comment-list">
        {reviewsContext &&
          reviewsContext.reviews.map((review) => (
            <Review
              key={review.id}
              reviewData={review}
              onDelete={handleDelete}
            />
          ))}
      </ul>
      <Modal
        isOpen={deleting}
        onAccept={handleAccept}
        onCancel={handleCancel}
        children={<p style={{ color: "#000" }}>Delete Comment?</p>}
      />
    </>
  );
};

export default ReviewsList;
