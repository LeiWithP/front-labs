import "./ReviewForm.css";
import { useContext, useState } from "react";
import { ReviewsContext } from "../../providers/ReviewsProvider";

const ReviewForm = () => {
  const [formData, setFormData] = useState({ email: "", review: "" });
  const reviewsContext = useContext(ReviewsContext);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email.length > 0 && formData.review.length) {
      reviewsContext
        ?.createReview({ email: formData.email, review: formData.review })
        .then(() => {
          setFormData({ email: "", review: "" });
        });
    } else {
      alert("Invalid comment format");
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        className="input-box"
      />
      <textarea
        rows={4}
        name="review"
        placeholder="Add a comment..."
        onChange={handleChange}
        value={formData.review}
        className="input-box"
      />
      <button className="submit-button">Comment</button>
    </form>
  );
};

export default ReviewForm;
