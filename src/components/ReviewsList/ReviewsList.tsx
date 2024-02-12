import "./ReviewsList.css";
import Review from "../Review/Review";
import { useContext, useRef, useState } from "react";
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
  const editedReview = useRef(selectedReview);

  const handleDelete = (id: number) => {
    setSelectedReview({ id: id, email: "", review: "" });
    setDeleting(true);
  };

  const handleUpdate = ({ id, email, review }: ReviewShape) => {
    setSelectedReview({ id: id, email: email, review: review });
    setUpdating(true);
  };

  const handleAcceptUpdate = () => {
    const newReview = editedReview.current;
    if (
      newReview.email === selectedReview.email &&
      newReview.review === selectedReview.review
    ) {
      return alert("Cannot edit with the same information");
    }

    if (newReview.email.length === 0 || newReview.review.length === 0) {
      return alert("Don't leave blank fields");
    }

    reviewsContext
      ?.updateReview(newReview)
      .catch((error) => console.error(error))
      .finally(() => setUpdating(false));
  };

  const handleUpdateChange = (newReview: ReviewShape) => {
    editedReview.current = newReview;
  };

  const handleAcceptDelete = () => {
    if (selectedReview?.id) {
      reviewsContext
        ?.deleteReview(selectedReview.id)
        .catch((error) => console.error(error))
        .finally(() => {
          setDeleting(false);
        });
    }
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
            onChange={handleUpdateChange}
          />
        }
      />
    </>
  );
};

export default ReviewsList;
