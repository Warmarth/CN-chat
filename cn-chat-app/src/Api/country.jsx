// import { memo } from 'react';
import { useState } from 'react';

export const CountryFinder = ({ value, change, ...props }) => {
  return (
    <div>
      <h1>find countries</h1>
      <input
        type="text"
        value={value}
        onChange={change}
        {...props}
        className="w-2/3 outline-none bg-blue-900 rounded-sm h-10 text-fuchsia-100 pl-3"
      />
    </div>
  );
};

// The Country component is a functional component that renders the text "Country". The Country component is exported as the default export of the file.
export const Nation = ({ Query }) => {
  const [show, setShow] = useState({});

  // console.log(Query);
  const handleClick = (i) => {
    setShow((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4  gap-4 text-center">
      {Query.length >= 5 ? (
        <p>pick a country</p>
      ) : (
        Query.map((c) => (
          <Tera
            nation={c}
            key={c.name.common}
            show={show[c.name.common]}
            handleClick={() => handleClick(c.name.common)}
          />
        ))
      )}
    </div>
  );
};

export function Tera({ nation, show, handleClick }) {
  function mapper(i) {
    return Object.entries(i).map(([key, value]) => <li key={key}>{value}</li>);
  }

  return (
    <div>
      <div
        key={nation.name.common}
        className={`shadow-2xl rounded-b-3xl bg-slate-500 overflow-hidden w-[13rem] 
         text-white pt-2`}
      >
        <div className="flex items-center justify-around gap-2 pb-1  ">
          <h1 className="">{nation.name.common}</h1>
          <button onClick={handleClick} className="btn ">
            {show ? 'hide' : 'show'}
          </button>
        </div>
        {show && (
          <div className="">
            <div>
              <p>{nation.capital}</p>
              <p>{nation.population}</p>
              <p>{nation.area}</p>
            </div>
            <ul>
              <li className="font-bold text-sm">languages:</li>
              {nation.languages ? <small className="flex justify-around">{mapper(nation.languages)}</small> : ''}
            </ul>
            <img src={nation.flags.png} alt={nation.name.common} loading="lazy" className="" />
          </div>
        )}
      </div>
    </div>
  );
}

// The Country component is a functional component that renders the text "Country". The Country component is exported as the default export of the file.
