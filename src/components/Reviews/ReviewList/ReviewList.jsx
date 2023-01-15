import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewList.css";

function ReviewList({
  user,
  reviews,
  handleDeleteReview,
  handleEditReview,
  handleAddComment,
}) {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
          handleEditReview={handleEditReview}
          handleDeleteReview={handleDeleteReview}
          handleAddComment={handleAddComment}
          user={user}
        />
      ))}
    </div>
  );
}

export default ReviewList;
