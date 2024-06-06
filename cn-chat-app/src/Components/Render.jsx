import { useContext } from 'react';
import { themeContext } from './theme';
const Render = () => {
  const [theme, setTheme] = useContext(themeContext);
  return (
    <div>
      <button className={`btn ${theme ? 'btn-primary' : 'btn-secondary'}  `} onClick={() => setTheme((r) => !r)}>
        change theme
      </button>
    </div>
  );
};

export default Render;
