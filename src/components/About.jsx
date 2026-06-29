import { motion } from "framer-motion";
import { FaBrain, FaLaptopCode, FaDatabase } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      text: "Passionate about building intelligent systems using Machine Learning, Python and Scikit-learn."
    },
    {
      icon: <FaDatabase />,
      title: "Data Science",
      text: "Love transforming raw data into meaningful insights through EDA, visualization and statistics."
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      text: "Enjoy developing real-world applications using Flask, Python and modern web technologies."
    }
  ];

  return (
    <section className="section" id="about">

      <motion.h2
        className="section-title"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
      >
        I'm a Computer Science student specializing in Artificial Intelligence
        and Machine Learning. I enjoy solving real-world problems using Python,
        Machine Learning, SQL and Data Analysis. My goal is to become an AI
        Engineer capable of building impactful software products.
      </motion.p>

      <div className="about-grid">
        {cards.map((card,index)=>(
          <motion.div
            key={index}
            className="glass-card"
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:index*0.2}}
            viewport={{once:true}}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}