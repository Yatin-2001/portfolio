import { motion } from "framer-motion";
import Section from "./SectionWrapper";
import styled from "styled-components";
import { projects } from "../data/projects";
import { useTheme } from "../contexts/themeContext"
import { lightTheme, darkTheme } from '../themes';


export default function Projects() {


  const { isDark } = useTheme();

  var theme = isDark ? darkTheme : lightTheme;

  const Grid = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const Card = styled(motion.div)`
    width: 300px;
    background: ${theme.background};
    color: ${theme.text};
    border-radius: 16px;
    overflow: hidden;
    border: solid
  `;

  const Subheading = styled.h1`
    font-size: 2rem;
    color: ${theme.text};
  `;


  return (
    <Section style={{ background: theme.background }}>
      <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Subheading style={{ color: theme.text, marginBottom: "2rem" }}>Projects</Subheading>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <Grid>
            {projects.map((project, index) => (
              <Card
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 200 }}
                transition={{ delay: index * 0.4 }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: '20px' }}>
                  <img src={project.image} style={{ height: "10rem", width: "15rem" }} />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  );
}
