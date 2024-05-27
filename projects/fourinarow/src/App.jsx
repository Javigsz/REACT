import './App.css'
import { useState } from 'react'
import { TURNS } from './constants'
import { checkWinnerFrom,checkEndGame } from './boardLogic'
import WinnerModal from './WinnerModal'

function App() {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {

    setBoard(Array(42).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  
  }

  const handleClick = (index) => {

    //if there is winner already, nothing happens
    if (board[index] || winner) return

    //updating the board
    const newBoard = [...board]
    let i = index;
    
    while(i < 35){
      if(newBoard[i+7] === null){
        i=i+7;
      }
      else {
        break
      }
    }

    newBoard[i] = turn
    setBoard(newBoard)

    //change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //check if there is a winner or the game is a tie
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) 
    }

  }


  return (
    <>
    <div className="board">
      <h1>Connect 4</h1>
      <div className="game">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <section className='turn'>
        Turn:
        {turn == TURNS.X && TURNS.X}
        {turn == TURNS.O && TURNS.O}
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </div>
    </>
  )
}

export default App
