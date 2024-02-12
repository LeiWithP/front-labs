import "./ReviewsList.css";
import Review from "../Review/Review";
import { useContext, useState } from "react";
import { ReviewsContext } from "../../providers/ReviewsProvider";
import { ReviewShape } from "../../types";
import Modal from "../Modal/Modal";
import UpdateForm from "../UpdateForm/UpdateForm";

const ReviewsList = () => {
  const reviewsContext = useContext(ReviewsContext);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [selectedReview, setSelectedReview] = useState<ReviewShape>({
    email: "",
    review: "",
  });

  const handleDelete = (id: number) => {
    console.log(id);
    setSelectedReview({ id: id, email: "", review: "" });
    setDeleting(true);
  };

  const handleUpdate = ({ id, email, review }: ReviewShape) => {
    console.log(id);
    setSelectedReview({ id: id, email: email, review: review });
    setUpdating(true);
  };

  const handleAcceptDelete = () => {
    if (selectedReview?.id) {
      reviewsContext?.deleteReview(selectedReview.id).finally(() => {
        setDeleting(false);
      });
    }
  };

  const handleAcceptUpdate = () => {
    console.log(selectedReview);
    reviewsContext
      ?.updateReview(selectedReview)
      .finally(() => setUpdating(false));
  };

  const handleCancel = () => {
    setDeleting(false);
    setUpdating(false);
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
              onUpdate={handleUpdate}
            />
          ))}
      </ul>
      <Modal
        isOpen={deleting}
        onAccept={handleAcceptDelete}
        onCancel={handleCancel}
        children={<p style={{ color: "#000" }}>Delete Comment?</p>}
      />
      <Modal
        isOpen={updating}
        onAccept={handleAcceptUpdate}
        onCancel={handleCancel}
        children={
          <UpdateForm
            originalReview={selectedReview}
            onChange={setSelectedReview}
          />
        }
      />
    </>
  );
};

export default ReviewsList;
