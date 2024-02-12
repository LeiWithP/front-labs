import "./UpdateForm.css";
import { ReviewShape } from "../../types";
import { useState } from "react";

interface UpdateFormProps {
  originalReview: ReviewShape;
  onChange: (newReview: ReviewShape) => void;
}

const UpdateForm = ({ originalReview, onChange }: UpdateFormProps) => {
  const [formData, setFormData] = useState(originalReview);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    onChange({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        className="input-box"
      />
      <textarea
        rows={5}
        name="review"
        placeholder="Add a comment..."
        onChange={handleChange}
        value={formData.review}
        className="input-box"
      />
    </div>
  );
};

export default UpdateForm;
