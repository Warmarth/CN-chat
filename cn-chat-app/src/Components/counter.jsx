import { useState } from 'react';

const Counter = () => {
  const cnt = {
    value: 0,
    tag: ['tag1', 'tag2', 'tag3'],
  };
  const [count, setCount] = useState(cnt);
  let val = count.value === 0 ? <h1>zero</h1> : count.value;
  let classes = newFunction();
  function newFunction() {
    let classes = ' indicator text-primary mb-3 ';
    classes += count.value <= 0 ? '' : 'bg-green-400';
    return classes;
  }

  function addCount() {
    setCount({ ...cnt, value: count.value + 1 });
  }
  function removeCount() {
    setCount({ ...cnt, value: count.value - 1 });
  }

  return (
    <div>
      <h1>Counter project </h1>
      <span className={classes}> {val}</span>
      <ul >
        {count.tag.map((tag, index) => (
          <li className='card-title' key={index}>{tag}</li>
        ))}
      </ul>
      <button onClick={addCount} className="btn btn-accent">
        increment
      </button>
      <button onClick={removeCount} className="ml-1 btn stroke-primary border-emerald-400">
        decrement
      </button>
    </div>
  );
};

export default Counter;
