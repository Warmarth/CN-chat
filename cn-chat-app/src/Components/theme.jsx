// import App from '../App'
import { useState, createContext } from 'react';

export const themeContext = createContext(null);

export default function themeDisplay() {
  const [theme, setTheme] = useState(false);
  return [theme, setTheme];
}
