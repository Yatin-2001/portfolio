import React from "react";
import styled, { useTheme } from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SectionWrapper = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.title};
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.title};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.title};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: 2px solid ${({ theme }) => theme.primary};
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.title};
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default function Contact() {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <Title>Contact Me</Title>
      <SocialRow>
        <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noreferrer"><FaEnvelope /></a>
      </SocialRow>
      <Form onSubmit={e => e.preventDefault()}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea rows="5" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </SectionWrapper>
  );
}
