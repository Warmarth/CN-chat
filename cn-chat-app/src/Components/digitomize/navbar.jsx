import React from 'react';
import logo from '/image1.png';
import { useState } from 'react';

function Navbar({ nav }) {
  const [hover, setHover] = useState(1);
  function handleHover(i) {
    setHover((prev) => (prev === i ? prev : i));
  }
  return (
    <div className="w-full bg-black py-1">
      <nav className="flex items-center justify-between capitalize px-4 ">
        <img src={logo} alt="logo" className=" bg-[#000000] rounded-full w-12 border-white border-2 cursor-pointer" />
        <ul className="grid grid-cols-4 lg:w-4/6 xl:6/6 justify-center items-center overflow-hidden gap-3 transition-all ">
          {nav.map((item) => (
            // <link to={path} will replace <li> tag
            <li
              className={`hover:bg-white hover:text-black  border-transparent border-2 rounded-2xl  ${hover === item.id && 'text-white border-[#175497] transition-all ease-in-out shadow-lg font-bold animate-pulse'} bg-[#000000] text-white cursor-pointer tabular-nums`}
              key={item.id}
              onClick={() => handleHover(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <button className=" btn btn-primary text-slate-100 capitalize rounded-3xl px-[1.5rem]">login</button>
      </nav>
    </div>
  );
}

export default Navbar;
