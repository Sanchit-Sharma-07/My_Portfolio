import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="section" id="contact">

      <h2 className="section-title">
        Let's Connect
      </h2>

      <motion.div
        className="contact-container"
        initial={{opacity:0,y:60}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >

        <div className="contact-card">

          <FaEnvelope />

          <h3>Email</h3>

          <p>sharmasanchit432@gmail.com</p>

        </div>

        <div className="contact-card">

          <FaGithub />

          <h3>GitHub</h3>

          <a
            href="https://github.com/Sanchit-Sharma-07"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>

        </div>

        <div className="contact-card">

          <FaLinkedin />

          <h3>LinkedIn</h3>

          <a
            href="https://linkedin.com/in/sanchit-sharma-8922b6271"
            target="_blank"
            rel="noreferrer"
          >
            Connect
          </a>

        </div>

      </motion.div>

      <motion.a

        href="mailto:sharmasanchit432@gmail.com"

        className="mail-btn"

        whileHover={{scale:1.05}}

      >

        <FaPaperPlane />

        Send Email

      </motion.a>

    </section>
  );
}