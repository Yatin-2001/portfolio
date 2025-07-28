import styled from "styled-components";
import { useTheme } from "../contexts/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;
`;

const Slider = styled.div`
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 30px;
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 2px 1rem 2px 1rem;
  cursor: pointer;
  transition: background 0.3s;
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  align-items: center;
  transition: all 0.3s ease; 

  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 1rem;
  }
`;

export default function Toggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <Slider onClick={toggleTheme}>
        <IconWrapper align={isDark ? "right" : "left"}>
          {isDark ? <FaMoon /> : <FaSun />}
        </IconWrapper>
      </Slider>
    </ToggleContainer>
  );
}
