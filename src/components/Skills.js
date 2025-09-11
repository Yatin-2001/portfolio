import { useTheme } from "../contexts/themeContext"
import { lightTheme, darkTheme } from '../themes';
import React from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { skills } from "../data/skills";

const SectionWrapper = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.title};
  margin-bottom: 2rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export default function Skills() {
    const { isDark } = useTheme();
    var theme = isDark ? darkTheme : lightTheme;

    return (
        <SectionWrapper>
            <Title>Skills</Title>
            <SkillGrid style={{marginTop: "2rem"}}>
                {skills.map(skill => (
                    <SkillCard key={skill.name}>
                        <h3 style={{ marginBottom: "0.5rem", color: theme.text }}>{skill.name}</h3>
                        <ProgressBar
                            completed={skill.level}
                            bgColor={theme.primary}
                            height="12px"
                            animateOnRender={true}
                            isLabelVisible={false}
                            baseBgColor={theme.cardHover}
                        />
                        <span style={{fontSize: "0.9rem", color: theme.text }}>
                            {skill.level}%
                        </span>
                    </SkillCard>
                ))}
            </SkillGrid>
        </SectionWrapper>
    );
}
