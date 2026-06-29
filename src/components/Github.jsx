import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Github() {
  return (
    <section className="section" id="github">
      <motion.div
        className="github-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <FaGithub />

        <h2>Explore My GitHub</h2>

        <p>
          Discover my latest projects,
          machine learning experiments,
          Python applications and open-source work.
        </p>

        <a
          href="https://github.com/Sanchit-Sharma-07"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub
        </a>
      </motion.div>
    </section>
  );
}