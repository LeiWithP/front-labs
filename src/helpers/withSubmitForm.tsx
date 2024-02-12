import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import { ReviewsContext } from "../providers/ReviewsProvider";

// interface ReviewFormProps {
//   createReview: (newReview: { email: string; review: string }) => void;
// }

function withReviewForm<T>(WrappedInputs: React.ComponentType<T>) {
  const ReviewForm: React.FC<T> = (props) => {
    const [formData, setFormData] = useState({ email: "", review: "" });
    const reviewsContext = useContext(ReviewsContext);

    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formData.email.length > 0 && formData.review.length > 0) {
        reviewsContext?.createReview(formData).then(() => {
          setFormData({ email: "", review: "" });
        });
      } else {
        alert("Invalid comment format");
      }
    };

    return (
      <form className="form-box" onSubmit={handleSubmit}>
        <WrappedInputs
          {...(props as T)}
          handleChange={handleChange}
          formData={formData}
        />
        <button type="submit" className="submit-button">
          Comment
        </button>
      </form>
    );
  };

  return ReviewForm;
}

export default withReviewForm;
