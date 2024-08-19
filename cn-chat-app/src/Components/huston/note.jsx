// import { useState } from 'react';
const Note = ({ note, toggleDelete, toggleUpdate, ...props }) => {
  const { name, number, keys } = note;
  const value = `${name} ${number}`;
  return (
    <p key={keys}>
      <li {...props}>{value}</li>
      <button onClick={toggleDelete} className="btn btn-link">
        {`delete`}{' '}
      </button>
      <button onClick={toggleUpdate} className="btn btn-link">
        {`update`}{' '}
      </button>
    </p>
  );
};

export default Note;
