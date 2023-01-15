import styles from '../Comments/Comments.module.css'
import { useState } from "react";

const Comments = props => {
  const [value, setValue] = useState({
    text: "",
    // author:
  });
  console.log("coomments", props);
  console.log(props.allComments);

  const handleTxtChange = event => {
    setValue({ ...value, text: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddComment(value, props.reviewId);
  };

  return (
    <div className="dropdown">
      <span
        className=" dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Reply
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <form
          className="px-4 py-3 review-form"
          aria-labelledby="dropdownMenuButton1"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <input
              className="form-control form-field"
              onChange={handleTxtChange}
              value={value.text}
              type="text"
              placeholder="What are your thoughts?"
              name="text"
            />
          </div>
          <button className="btn btn-primary review-form-btn" type="POST">
            Post
          </button>
        </form>
      </div>
      {props?.allComments.map((review, index) => (
        <div className={styles.commentCard}>
          <div key={index}>{review.text}</div>
        </div>
      ))}
      
    </div>
  );
};

export default Comments;
