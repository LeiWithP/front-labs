import "./App.css";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewsList from "./components/ReviewsList/ReviewsList";
import { ReviewsProvider } from "./providers/ReviewsProvider";

function App() {
  return (
    <ReviewsProvider>
      <div className="comment-box">
        <h3>Leave comments</h3>
        <ReviewForm />
        <ReviewsList />
      </div>
    </ReviewsProvider>
  );
}

export default App;
