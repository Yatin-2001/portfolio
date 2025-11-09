import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import Section from "./SectionWrapper";

const Wrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: auto;
`;

const TextCol = styled.div`
  flex: 1 1 300px;
  padding: 1rem;
`;

const CircleGreeting = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.title};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

const Summary = styled(motion.p)`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  line-height: 1.4;
`;

const VisualCol = styled.div`
  flex: 1 1 320px;
  position: relative;
  width: 50vh;
  height: 50vh;
  max-width: 500px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 50vh;
  height: 50vh;
  max-width: 500px;
  max-height: 500px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.35rem solid ${({ theme }) => theme.primary};
  box-sizing: border-box;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OrbitCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
`;

const Tool = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 0.5rem 0.8rem;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 2;
  cursor: default;

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -120%);
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, -100%);
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 10;
`;

const tools = [
  { name: "Langchain", angle: -60, info: "AI framework for agentic Chatbot development" },
  { name: "SAGA", angle: -30, info: "Distributed transaction pattern" },
  { name: "CQRS", angle: 0, info: "Command‑Query Segregation" },
  { name: "Kafka", angle: 30, info: "Messaging system" },
  { name: "AWS", angle: 60, info: "EC2, S3, Lambda" },
  
];

export default function Hero() {
  const theme = useTheme();

  return (
    <Wrapper style={{ background: theme.background, color: theme.text }}>
      <TextCol>
        <CircleGreeting>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I’m Yatin
          </motion.span>
        </CircleGreeting>
        <Subtitle
          as={motion.p}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Full‑Stack Developer | AI/ML Enthusiast
        </Subtitle>
        <Summary
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Have 3+ Years of experience in working with tools like Kafka, EC2, ELK stack and implementing design patterns like CQRS and SAGA pattern and building scalable micro-service architecture.
          Also have experience working with AI/ML implemeting many tools and integrating agentic chatbots and workflows into applications.
        </Summary>
      </TextCol>

      <VisualCol>
        <ProfileImage
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/coder.webp`}
            alt="Yatin"
          />
        </ProfileImage>

        <OrbitCenter>
          {tools.map((tool, i) => {
            const rad = (tool.angle * Math.PI) / 180;
            const r = 240; // adjust this for 60vh if needed
            const x = Math.cos(rad) * r;
            const y = Math.sin(rad) * r;

            return (
              <Tool
                key={tool.name}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                {tool.name}
                <Tooltip>{tool.info}</Tooltip>
              </Tool>
            );
          })}
        </OrbitCenter>
      </VisualCol>
    </Wrapper>
  );
}
