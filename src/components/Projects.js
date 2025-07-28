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
    position: relative;
    width: 300px;
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.cardHover};
      z-index: 0;
      transition: left 0.4s ease;
    }

    &:hover::before {
      left: 0;
    }

    &:hover {
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
    }

    > * {
      position: relative;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    h3 {
      margin: 0 0 0.5rem 0;
    }

    p {
      margin: 0;
      color: ${({ theme }) => theme.text};
      opacity: 0.85;
    }

    .github-button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.primary};
      border: 2px solid ${({ theme }) => theme.primary};
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;

      &:hover {
        background: ${({ theme }) => theme.primary};
        color: white;
        transform: scale(1.05);
      }
    }
  `;



  const Subheading = styled.h1`
    font-size: 2rem;
    color: ${theme.text};
  `;


  return (
    <Section style={{ background: theme.background }}>
      <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Subheading style={{ color: theme.title, marginBottom: "2rem" }}>Projects</Subheading>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <Grid>
            {projects.map((project, index) => (

              <Card
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: '20px' }}>
                  <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.title} style={{ height: "10rem", width: "15rem" }} />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.github && (
                    <button
                      className="github-button"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      View Code
                    </button>
                  )}
                </div>
              </Card>

            ))}
          </Grid>
        </div>
      </div>
    </Section>
  );
}