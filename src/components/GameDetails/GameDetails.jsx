import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getGameDetails } from "../../services/gameServices";
import styles from "../GameDetails/GameDetails.module.css";
import * as gameServices from "../../services/gameServices";
import * as reviewService from "../../services/reviewService";
import ReviewForm from "../../components/Reviews/ReviewForm/ReviewForm";
import ReviewList from "../Reviews/ReviewList/ReviewList";

const GameDetails = props => {
  const [reviews, setReviews] = useState([]);
  // GameDetails stores data from rawg
  const [gameDetails, setGameDetails] = useState(null);
  // Make a new state for our game in our DB (GameCopy)
  const [gameCopy, setGameCopy] = useState();

  const [comments, setComments] = useState([]);
  let location = useLocation();

  useEffect(() => {
    getGameDetails(location.state.gameDetails.id).then(gameData =>
      setGameDetails(gameData)
    );
  }, [location.state.gameDetails.id]);

  // console.log(gameCopy);

  useEffect(() => {
    gameServices.getGame(location.state.gameDetails.id).then(game => {
      setReviews(game.reviews);
      setGameCopy(game);
    });
  }, [location.state.gameDetails.id]);

  const handleAddReview = async newFormData => {
    const newReview = await reviewService.create(newFormData);
    const author = {
      _id: props.user.profile,
      name: props.user.name,
    };
    newReview.author = author;
    setReviews([...reviews, newReview]);
  };

  const handleAddComment = async (newFormComment, id) => {
    const updatedReview = await reviewService.createComment(newFormComment, id);
    setReviews(
      reviews.map(review =>
        review._id === updatedReview._id ? updatedReview : review
      )
    );
  };

  const handleDeleteReview = id => {
    reviewService.deleteOne(id);
    setReviews(reviews.filter(review => review._id !== id));
  };

  const handleEditReview = async (id, data) => {
    console.log(id, data);
    const updatedReview = await reviewService.update(id, data);
    console.log(updatedReview);
    const author = {
      _id: props.user.profile,
      name: props.user.name,
    };
    updatedReview.author = author;
    setReviews(
      reviews.map(r => (r._id === updatedReview._id ? updatedReview : r))
    );
    // setReviews({...reviews, [id.review.text]: id.review.value})
  };



  return (
    <div className="all-content">
      {gameDetails ? (
        <div className={styles.pageBody}>
          <h1>{gameDetails.name}</h1>



          <div className={styles.imgAndDesc}>

          <img
          className={styles.detailsImg} 
          src={gameDetails.background_image} 
          alt={gameDetails.name} 
          />
          <h3 className={styles.desc}>Game Description</h3>
          <p className={styles.desc}>{gameDetails.description_raw}</p>
          </div>



          <div className={styles.detailsContainer}>

          <h2>Release Date</h2>
          <p>{gameDetails.released}</p>
          <h2>Genres</h2>
          <p>
            {" "}
            {gameDetails.genres.map((genre, index) => (
              <div key={index} state={{ genre }}>
                {genre.name}
              </div>
            ))}
          </p>
          <h2>Developers</h2>
          <p>
            {" "}
            {gameDetails.developers.map((developer, index) => (
              <div key={index} state={{ developer }}>
                {developer.name}
              </div>
            ))}
          </p>
          <h2>Platforms</h2>
          <p>
            {" "}
            {gameDetails.platforms.map((platform, index) => (
              <div key={index} state={{ platform }}>
                {platform.platform.name}
              </div>
            ))}
          </p>
          <h2>Metacritic Rating </h2>
          <p>{gameDetails.metacritic}</p>
          </div>


          <div className={styles.reviewContainer}>
          
          <ReviewForm
            user={props.user}
            handleAddReview={handleAddReview}
            gameDetails={gameDetails}
          />
          <ReviewList
            reviews={reviews}
            handleDeleteReview={handleDeleteReview}
            handleEditReview={handleEditReview}
            handleAddComment={handleAddComment}
            user={props.user}
          />
          </div>

          <Link to="/">Return to Game Page</Link>
          
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default GameDetails;
