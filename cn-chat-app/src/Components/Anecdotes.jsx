import React, { useState } from 'react';
const anecdotes = [
  'If it hurts, do it more often. 1',
  'Adding manpower to a late software project makes it later! 2',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time. 3',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. 4',
  'Premature optimization is the root of all evil. 5',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. 6',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients. 7',
  'The only way to go fast, is to go well. 8',
];

const Anecdotes = () => {
  const [seleted, setSeleted] = useState(0);
  const [votes, setVotes] = useState({ 0: 1, 1: 3, 2: 4, 3: 2 }); // [0, 0, 0, 0
  const points = { 0: 1, 1: 3, 2: 4, 3: 2 };
  const copy = { ...points };
  copy[seleted] = copy[seleted];
  const handleVote = () => {
    const copy = { ...votes };
    // copy[seleted] = copy[seleted] + 1;
    console.log(copy);
    setVotes(copy);
  };

  return (
    <div className=" card card-normal space-y-4">
      <h1>Anecdotes</h1>
      <p className="h-[6rem] w-[25rem] m-auto px-4 rounded-badge " data-theme="light">
        {anecdotes[seleted]}
      </p>
      <p>has {copy[seleted]} votes</p>
      <div className="space-x-9 text-center">
        <button className="btn btn-secondary " onClick={ handleVote}>
          vote
        </button>
        <button className="btn btn-accent" onClick={() => setSeleted(Math.floor(Math.random() * anecdotes.length))}>
          Next Anecdote
        </button>
      </div>
    </div>
  );
};

export default Anecdotes;
