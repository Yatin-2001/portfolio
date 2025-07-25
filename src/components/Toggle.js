import styled from "styled-components";
import { useTheme } from "../contexts/themeContext"
import { lightTheme, darkTheme } from '../themes';


export default function Toggle() {
  const { isDark, toggleTheme } = useTheme();

  var theme = isDark ? darkTheme : lightTheme;

  const Button = styled.button`
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: transparent;
    color: ${theme.text};
    border: 2px solid ${theme.text};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    z-index: 999;
    transition: background 0.3s;

    &:hover {
      background: ${theme.text};
      color: ${theme.background};
    }
  `;

  return <Button onClick={toggleTheme}>{isDark ? "Light Mode" : "Dark Mode"}</Button>;
}
