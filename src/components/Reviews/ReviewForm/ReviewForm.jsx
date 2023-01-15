import { useState } from "react";
// import * as authService from '../../services/authService'

// todo: we want user to be logged in to do this. use above code.

const ReviewForm = props => {

  const [value, setValue] = useState({
    text: "",
    date: new Date(),
    image: props.gameDetails.background_image,
    apiId: props.gameDetails.id,
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTxtChange = event => {
    setValue({ ...value, text: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddReview(value);
    if (value.text) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <>
      <div className="form-container">
        <form className="review-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-msg">Review Submit Successful 🎉</div>
          ) : null}
          {submitted && !value.text ? (
            <span>Add a review first. It's not that hard.</span>
          ) : null}

          <input
            onChange={handleTxtChange}
            value={value.text}
            type="text"
            className="form-field"
            placeholder="What are your thoughts?"
            name="text"/>
          <button 
          className="review-form-btn" 
          type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
