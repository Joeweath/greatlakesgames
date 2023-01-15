import styles from './GameCard.module.css'

const GameCard = (props) => {
  return (

    <div className={styles.gamecard}>
      <div className={styles.gamepic}>
        <img src={props.gameDetails.background_image} alt={props.gameDetails.name} />
      </div>
      {props.gameDetails.name}
    </div>
  );
}

export default GameCard; 