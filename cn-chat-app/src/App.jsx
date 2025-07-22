// import Movies from './Components/Movie';
// import Render from './Components/Render';
// import { themeContext } from './Components/theme';
// import themeDisplay from './Components/theme';
// import Counter from './Components/counter';
//import Anecdotes from './Components/Anecdotes';
// import { useContext } from 'react';
// import { Displayer } from './Components/huston/Render';
// import Navbar from './Components/digitomize/navbar';
// import Sidebar from './Components/sidebar';
import Countries from './Api/countries';
// import { FormBody } from './contactForm/formBody';

export default function App() {
  // const [theme, setTheme] = themeDisplay();
  // const navItems = [
  //   {
  //     id: 'Home',
  //     name: 'Home',
  //     path: '/',
  //   },
  //   {
  //     id: 'contest',
  //     name: 'contest',
  //     path: '/contest',
  //   },
  //   {
  //     id: 'blog',
  //     name: 'blog',
  //     path: '/blog',
  //   },
  //   {
  //     id: 'leaderboard',
  //     name: 'leaderboard',
  //     path: '/leaderboard',
  //   },
  // ];
  return (
    // <themeContext.Provider value={[theme, setTheme]}>
    <div className="text-center">
      {/* <Render /> */}
      {/* {<Movies />} */}
      {/* <Counter /> */}
      {/*<Anecdotes />*/}
      {/* <Navbar nav={navItems} /> */}
      {/* <Displayer /> */}
      {/* <Sidebar /> */}
      <Countries />
      {/* <FormBody /> */}
    </div>
    // </themeContext.Provider>
  );
}
