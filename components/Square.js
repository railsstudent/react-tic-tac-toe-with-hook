import React from 'react';

const styles = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '40px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
)

export default Square;
