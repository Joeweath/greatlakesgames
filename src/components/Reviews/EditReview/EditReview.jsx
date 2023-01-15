import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function EditReview(props) {
  console.log(props)
  const location = useLocation()
  // const [reviews, setReviews] = useState(location.state)
  console.log(props.reviews.text)
  return(
    <>
      <h2>Edit Review</h2>
      <form autoComplete="off">
        <div className="form-group mb-3">
        <input
            onChange={props.handleEditReview}
            value={props.reviews.text}
            type="text"
            className="form-field"
            placeholder={props.reviews.text}
            name="text"
            />
        </div>
        <button 
          // onClick={() => handleEditReview(reviews._id)}
          // state={{review}}
          >Edit Review</button>
      </form>
    </>
  );
}

export default EditReview;