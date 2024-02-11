import { useState } from "react";
import "./App.css";

const initData = [
  { id: 1, email: "mario@mail.com", review: "Lorem ipsum mario" },
  { id: 2, email: "karla@mail.com", review: "Lorem ipsum karla" },
  { id: 4, email: "oracio@mail.com", review: "Lorem ipsum oracio" },
  { id: 5, email: "luis@mail.com", review: "Lorem ipsum luis" },
  { id: 7, email: "miriam@mail.com", review: "Lorem ipsum miriam" },
  { id: 8, email: "jesus@mail.com", review: "Lorem ipsum jesus" },
  { id: 9, email: "august@mail.com", review: "Lorem ipsum august" },
  { id: 10, email: "molinete@mail.com", review: "Lorem ipsum molinete" },
  { id: 11, email: "alice@mail.com", review: "Lorem ipsum alice" },
];

interface Review {
  id?: number;
  email: string;
  review: string;
}

interface ReviewProps {
  comment: Review;
}

const Review = ({ comment }: ReviewProps) => {
  return (
    <div>
      <h4>{comment.email}</h4>
      <h4>{comment.review}</h4>
    </div>
  );
};

function App() {
  const [reviews] = useState(initData);
  const [formData, setFormData] = useState({ email: "", review: "" });

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
  };

  return (
    <div className="comment-box">
      <h2>Leave comments</h2>
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
      <ul className="comment-list">
        {reviews &&
          reviews.map((review) => {
            return <Review key={review.id} comment={review} />;
          })}
      </ul>
    </div>
  );
}

export default App;
