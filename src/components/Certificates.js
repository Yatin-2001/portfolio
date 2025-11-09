import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Section from "./SectionWrapper";
import { certificatesData } from "../data/certificates";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/themeContext";
import { lightTheme, darkTheme } from "../themes";
import { FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;
  const [selectedCert, setSelectedCert] = useState(null);

  // ---------- Styled Components ----------
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
    display: flex;
    flex-direction: column;
    height: 350px; /* keeps cards same height for uniform grid */

    &:hover {
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
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

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      padding: 1rem;
    }

    h3 {
      margin: 0 0 0.5rem 0;
      color: ${({ theme }) => theme.title};
      font-size: 1.1rem;
    }

    .course-count {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.text};
      opacity: 0.85;
      margin-top: auto; /* pushes it to bottom */
    }
  `;

  const Subheading = styled.h1`
    font-size: 2rem;
    color: ${theme.title};
  `;

  const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    backdrop-filter: blur(4px);
  `;

  const ModalContainer = styled(motion.div)`
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    border-radius: 16px;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.primary} transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 4px;
    }

    h2 {
      margin-top: 0;
      color: ${({ theme }) => theme.title};
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 1rem;
      text-align: left;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
      color: ${({ theme }) => theme.text};
    }

    .icon-btn {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.text};
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease;
      font-size: 1.1rem;

      &:hover {
        transform: scale(1.15);
      }
    }
  `;

  const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 16px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  `;

  // ---------- Animation Variants ----------
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // ---------- Escape key to close ----------
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedCert(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ---------- Render ----------
  return (
    <Section style={{ background: theme.background }}>
      <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
        <Subheading style={{ marginBottom: "2rem" }}>
          Certificates & Courses
        </Subheading>

        <Grid>
          {certificatesData.map((cert, index) => (
            <Card
              key={cert.id}
              theme={theme}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={`${process.env.PUBLIC_URL}${cert.thumbnail}`}
                alt={cert.title}
              />
              <div className="content">
                <h3>{cert.title}</h3>
                <div className="course-count">
                  {cert.certificates.length} courses completed
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </div>

      {/* ---------- Modal ---------- */}
      <AnimatePresence>
        {selectedCert && (
          <ModalOverlay
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedCert(null)}
          >
            <ModalContainer
              key="modal"
              theme={theme}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton theme={theme} onClick={() => setSelectedCert(null)}>
                ×
              </CloseButton>
              <h2>{selectedCert.title}</h2>

              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {selectedCert.certificates.map((c, index) => (
                  <motion.li key={index} variants={listItemVariants}>
                    <span>
                      {c.name}
                      {c.link ? "" : " (Ongoing)"}
                    </span>
                    {c.link && (
                      <button
                        className="icon-btn"
                        onClick={() => window.open(c.link, "_blank")}
                      >
                        <FiExternalLink />
                      </button>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Section>
  );
}
