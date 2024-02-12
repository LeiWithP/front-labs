import "./ReviewForm.css";
import { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({ email: "", review: "" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // alert("Invalid comment format")
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email.length > 0 && formData.review.length) {
      alert("OK");
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
      />
      <textarea
        rows={4}
        name="review"
        placeholder="Add a comment..."
        onChange={handleChange}
        value={formData.review}
      />
      <button className="submit-button">Comment</button>
    </form>
  );
};

export default ReviewForm;
