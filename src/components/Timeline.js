import Section from "./SectionWrapper";
import styled from "styled-components";
import { timeline } from "../data/timeline";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/themeContext"
import { lightTheme, darkTheme } from '../themes';

export default function Timeline() {

  const { isDark } = useTheme();

  var theme = isDark ? darkTheme : lightTheme;
  var lineColor = isDark ? darkTheme.text : lightTheme.text; 

  const Line = styled.div`
    width: 2px;
    background: ${lineColor};
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `;

  const Entry = styled(motion.div)`
    position: relative;
    width: 50%;
    padding: 1rem;
    text-align: ${(props) => (props.left ? "right" : "left")};
    align-self: flex-start;
  `;

  const Subheading = styled.h1`
    font-size: 2rem;
    color: ${theme.text};
  `;

  return (
    <Section style={{ background: theme.background, flexDirection: "column", position: "relative" }}>
      <Subheading style={{ color: theme.title, marginBottom: "2rem" }}>Timeline</Subheading>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
        <Line />
        {timeline.map((item, index) => (
          <Entry
            key={index}
            left={index % 2 === 0}
            initial={{ x: index % 2 === 0 ? -150 : 150, opacity: 0 }}
            whileInView={{ x: index % 2 === 0 ? -30 : 30, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ alignSelf: index % 2 === 0 ? "flex-start" : "flex-end", color: "#fff" }}
          >
            <strong style={{color: theme.text}}>{item.year}</strong>
            <p style={{color: theme.text}}>{item.text}</p>
          </Entry>
        ))}
      </div>
    </Section>
  );
}
