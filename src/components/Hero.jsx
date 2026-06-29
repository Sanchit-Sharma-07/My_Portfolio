import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../assets/profile.png";
import portfolio from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="bg-grid"></div>

      <div className="hero-content">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="hero-tag">

            ● AVAILABLE FOR INTERNSHIP

          </span>

          <h1>

            Hi,
            I'm
            <span>{portfolio.name}</span>

          </h1>

          <h2>AI • Data Science • Python Developer</h2>

          <div className="hero-tags">

            <span>Python</span>

            <span>Machine Learning</span>

            <span>SQL</span>

            <span>Flask</span>

            <span>Scikit-learn</span>

          </div>

          <p>
            Building AI-powered applications that transform
            real-world problems into intelligent software solutions
            using Machine Learning, Python and Data Science.
          </p>

          <div className="hero-buttons">

            <a
              className="primary-btn"
              href={portfolio.resume}
              download
            >
              <FaDownload />

              Resume
            </a>

            <a
              className="circle-btn"
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              className="circle-btn"
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
        >

          <div className="image-ring">

            <img
              src={profile}
              alt="profile"
            />

          </div>

        </motion.div>

      </div>

      <div className="scroll-down">

        <FaArrowDown />

      </div>

    </section>
  );
}