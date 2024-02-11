import "./App.css";
import { useState } from "react";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewsList from "./components/ReviewsList/ReviewsList";

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

function App() {
  const [reviews] = useState(initData);

  return (
    <div className="comment-box">
      <h2>Leave comments</h2>
      <ReviewForm />
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default App;
