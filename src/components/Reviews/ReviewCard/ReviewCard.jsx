import { useState } from "react";
import Comments from "../../Comments/Comments";

const ReviewCard = props => {
  const [toggle, setToggle] = useState(true);
  const [form, setForm] = useState(props.review.text);
  console.log("this is from my review card", props);
  function handleEdit() {
    setToggle(!toggle);
    props.handleEditReview(props.review._id, form);
    setForm(props.review.text);
  }
  console.log("reviewcard", props);
  return (
    <>
      <div className="review-card">
        <>
          <section className="ui">
            <h5>{props.review.author?.name}</h5>
            {props.user.profile === props.review.author._id && (
              <>
                <button onClick={() => setToggle(!toggle)}>Edit</button>
                <button
                  onClick={() => props.handleDeleteReview(props.review._id)}
                >
                  Delete
                </button>
              </>
            )}
          </section>
        </>
        {toggle ? (
          <section className="review-text">{props.review.text}</section>
        ) : (
          <section>
            <h4>Edit Review</h4>
            <input
              name="text"
              type="text"
              value={form}
              onChange={e => setForm(e.target.value)}
            />
            <button onClick={handleEdit}>Submit</button>
          </section>
        )}
      </div>
      <section className="ui">
        <Comments
          handleAddComment={props.handleAddComment}
          reviewId={props.review._id}
          allComments={props.review.comments}
        />
      </section>
    </>
  );
};

export default ReviewCard;
