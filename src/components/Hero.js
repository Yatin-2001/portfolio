import { motion } from "framer-motion";
import Section from "./SectionWrapper";
import styled from "styled-components";
import { useTheme } from "../contexts/themeContext"
import { lightTheme, darkTheme } from '../themes';


export default function Hero() {

    const { isDark } = useTheme();

    var theme = isDark ? darkTheme : lightTheme;

    const Heading = styled.h1`
        font-size: 3rem;
        color:${theme.text};
    `;

    return (
        <Section style={{ background: theme.background, color: theme.text }}>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ marginRight: "2rem" }}
            >
                <Heading>Hello, I am Yatin!</Heading>
                <p style={{ color: theme.text }}>Full Stack Developer | AI Enthusiast</p>
            </motion.div>
            <motion.img
                src="../images/coder.webp"
                style={{ height: "80vh", width: "60%", objectFit: "cover" }}
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
            />
        </Section>
    );
}
