import { motion } from "framer-motion";
import {
  FaCertificate,
  FaAward,
} from "react-icons/fa";

const certs = [
  "The Ultimate Job-Ready Data Science Course",
  "Python Programming",
  "SQL (Basic & Intermediate)",
  "Software Engineer Intern",
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h2 className="section-title">
        Certifications
      </h2>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FaCertificate />

            <h3>{cert}</h3>

            <FaAward className="award" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}