import { ReviewShape } from "../../types";

interface ReviewProps {
  comment: ReviewShape;
}

const Review = ({ comment }: ReviewProps) => {
  return (
    <div>
      <h4>{comment.email}</h4>
      <h4>{comment.review}</h4>
    </div>
  );
};

export default Review;
