import {winningArrays} from './constants'

export const checkWinnerFrom = (boardToCheck) => {

    for (const combo of winningArrays) {
        const [a, b, c, d] = combo
        if (
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c] &&
          boardToCheck[a] === boardToCheck[d]
        ) {
          return boardToCheck[a]
        }
      }
      // si no hay ganador
      return null

}

export const checkEndGame = (boardToCheck) => {

    return boardToCheck.every((cell) => cell !== null)

}