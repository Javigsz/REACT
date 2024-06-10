import {useState} from 'react'
import {GameModal} from './GameModal'


function ListOfGames ({ games }) {

    const [modal,setModal] = useState({})

    const gameInfo = (e,index) => {
        setModal(games.results[index])
    }

    const newModal = () => {
        if(modal){
            setModal({})
        }
    }

    return (
      <>
      <div className='games_grid'>
        {
          games.results.map((e,index) => 
            <div className="game" key={e.id} onClick={(e) => gameInfo(e, index)}>
              <div className="img_game">
                {e.background_image 
                ? <img src={e.background_image} alt={e.name} />
                : <img src='../game.jpg' alt={e.name}></img>}
              </div>
              <div className="game_info">
                <b><p>{e.name}</p></b>
                {e.released && <p className="date">{e.released}</p>}
              </div>
            </div>
          )
        }
      </div>
      <section>
        {modal.slug && <GameModal modal={modal} newModal={newModal}></GameModal>}
      </section>
      </>
    )
    
}

function NoGamesResults () {
    return (
      <p>No games found or no search made yet.</p>
    )
  }

export function Games ( {games} ) {
    const hasGames = games?.count > 0
    return (
        hasGames
      ? <ListOfGames games={games} />
      : <NoGamesResults />
    )
}