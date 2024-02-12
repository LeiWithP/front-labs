import "./App.css";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewsList from "./components/ReviewsList/ReviewsList";
import { useReviews } from "./hooks/useReviews";

function App() {
  const { reviews } = useReviews();

  return (
    <div className="comment-box">
      <h2>Leave comments</h2>
      <ReviewForm />
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default App;
