import { motion } from "framer-motion";
import {
  FaPython,
  FaRobot,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaRobot />,
    title: "VidSnap AI",
    tech: "Python • Flask • ElevenLabs • FFmpeg",
    desc:
      "AI-powered reel generator that converts uploaded content into engaging short videos using voice synthesis and automated media processing.",
    github: "https://github.com/Sanchit-Sharma-07/Vid_Snap_AI",
  },
  {
    icon: <FaChartBar />,
    title: "Gurgaon House Price Prediction",
    tech: "Python • Scikit-learn • Pandas",
    desc:
      "End-to-end machine learning pipeline for predicting house prices with feature engineering, regression models, and evaluation metrics.",
    github: "https://github.com/Sanchit-Sharma-07/Gurgaon-House-Prediction-System",
  },
  {
    icon: <FaPython />,
    title: "Instagram Data Analysis",
    tech: "Python • Pandas • NumPy",
    desc:
      "Exploratory data analysis project uncovering engagement patterns and user trends through visualization and statistical insights.",
    github: "https://github.com/Sanchit-Sharma-07/Coders-Of-Banglore",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="project-icon">{project.icon}</div>

            <h3>{project.title}</h3>

            <span>{project.tech}</span>

            <p>{project.desc}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View Project <FaArrowRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}