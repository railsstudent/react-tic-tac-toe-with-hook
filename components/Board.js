import React from 'react';
import Square from './Square';

const styles = {
  border: '2px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => (
  <div style={styles}>
    { squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
)

export default Board;
