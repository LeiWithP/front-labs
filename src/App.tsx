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

  return (
    <div className="comment-box">
      <h2>Leave comments</h2>
      <form className="form-box">
        <input type="email" name="email" placeholder="Email" />
        <textarea
          id=""
          rows={4}
          name="comment"
          placeholder="Add a comment..."
        />
        <button className="submit-button">Comment</button>
      </form>
      <ul className="comment-list">
        {reviews &&
          reviews.map((review) => <Review key={review.id} comment={review} />)}
      </ul>
    </div>
  );
}

export default App;
