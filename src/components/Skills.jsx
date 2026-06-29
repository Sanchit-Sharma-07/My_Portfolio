import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Flask",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "Statistics",
  "EDA",
  "Matplotlib",
  "Seaborn"
];

export default function Skills(){

    return(

<section className="section" id="skills">

<h2 className="section-title">
Skills
</h2>

<div className="skills-grid">

{
skills.map((skill,index)=>(

<motion.div

key={index}

className="skill"

initial={{opacity:0,scale:.8}}

whileInView={{opacity:1,scale:1}}

transition={{delay:index*.05}}

viewport={{once:true}}

>

{skill}

</motion.div>

))
}

</div>

</section>

)

}