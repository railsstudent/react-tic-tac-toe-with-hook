// Checkout ut original tutorial here: https://reactjs.org/tutorial/tutorial.html

import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
  width: '200px',
  margin: '20px auto'
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)

  console.log('history', history)
  console.log('stepNumber', stepNumber)
  const winner = calculateWinner(history[stepNumber])

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = step => {
     setStepNumber(step);
     setXisNext(step % 2 === 0);
  };

  const renderMoves = () => {
    const buttonStyles = {
      marginBottom: '0.5rem'
    }

    return history.map((_, move) => {
      const destination = move ? `Got to move #${move}` : 'Go to start';
      return (
        <li key={move} style={buttonStyles}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })
  }

  const gameStatus = () => {
    if (winner) {
      return <p>Winner: {winner}</p>
    }
    if (history[stepNumber].filter(b => b ===  null).length <= 0) {
      return <p>Tie game</p>
    }

    return <p>Next player: { xIsNext ? 'X': 'O' }</p>
  } 
  
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        { gameStatus() }
        { renderMoves() }
      </div>
    </>
  )
}

export default Game;
