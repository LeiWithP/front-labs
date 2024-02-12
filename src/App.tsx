import "./App.css";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewsList from "./components/ReviewsList/ReviewsList";
// import { useReviews } from "./hooks/useReviews";
import { ReviewsProvider } from "./providers/ReviewsProvider";

function App() {
  // const { reviews, createReview } = useReviews();

  return (
    <ReviewsProvider>
      <div className="comment-box">
        <h3>Leave comments</h3>
        {/* <ReviewForm createReview={createReview} />
      <ReviewsList reviews={reviews} /> */}
        <ReviewForm />
        <ReviewsList />
      </div>
    </ReviewsProvider>
  );
}

export default App;
