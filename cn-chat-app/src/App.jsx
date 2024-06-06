// import Movies from './Components/Movie';
// import Render from './Components/Render';
// import { themeContext } from './Components/theme';
// import themeDisplay from './Components/theme';
// import Counter from './Components/counter';

//import Anecdotes from './Components/Anecdotes';
// import { useContext } from 'react';

export default function App() {
  const [theme, setTheme] = themeDisplay();
  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <div className="text-center">
        {/* <Render /> */}
        {/* {<Movies />} */}
        {/* <Counter /> */}
        {/*<Anecdotes />*/}
      </div>
    </themeContext.Provider>
  );
}
