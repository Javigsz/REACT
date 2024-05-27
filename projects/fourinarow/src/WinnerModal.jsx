
// eslint-disable-next-line react/prop-types
const WinnerModal = ({ winner, resetGame }) => {

   if (winner === null) return null

   const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (

    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <div className="winnerCell">{winner}</div>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>

  )
}

export default WinnerModal
