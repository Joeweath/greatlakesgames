import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameCard from '../../components/GameCard/GameCard'
import { getGameList } from '../../services/gameServices'
import styles from './GameList.module.css'

const GameList = (props) => {
  const [games, setGames] = useState([])
  
  useEffect(() => {
    const fetchGames= async() => {
      const data= await getGameList()
      setGames(data)
    }
    fetchGames()
    // getGameList()
    // .then(gameData => setGames(gameData.results))
  },[])

  return (  
    <>
    <div className={styles.body}>
      <h1>Games</h1>
      <div className={styles.container}>
      {games.map((gameDetails, index) => ( 
        <div className={styles.gamelink} key={index}>
          <Link className={styles.game_title} to='/details' state={{gameDetails}} >
            <GameCard gameDetails={gameDetails} />
          </Link>
        </div>
        ))
      }
      </div>
    </div>
    </>
  );
}

export default GameList;