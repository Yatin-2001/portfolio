import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { ThemeProviderWrapper, useTheme } from "./contexts/themeContext";
import Toggle from "./components/Toggle";

function ThemedApp() {
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <Toggle />
        <Hero />
        <Projects />
        <Timeline />
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProviderWrapper>
      <ThemedApp />
    </ThemeProviderWrapper>
  );
}
