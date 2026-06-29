import { motion } from "framer-motion";

const education = [

{
degree:"B.E. Computer Science Engineering",
college:"Chandigarh University",
year:"2022 - 2026",
extra:"CGPA : 8.04"
},

{
degree:"M.E. Artificial Intelligence & Machine Learning",
college:"Chandigarh University",
year:"2026 - 2028",
extra:"Pursuing"
}

];

export default function Education(){

return(

<section
className="section"
id="education"
>

<h2 className="section-title">
Education
</h2>

<div className="timeline">

{

education.map((item,index)=>(

<motion.div

className="timeline-item"

key={index}

initial={{opacity:0,x:-60}}

whileInView={{opacity:1,x:0}}

transition={{delay:index*.2}}

viewport={{once:true}}

>

<div className="timeline-dot"></div>

<div className="timeline-card">

<h3>{item.degree}</h3>

<h4>{item.college}</h4>

<p>{item.year}</p>

<span>{item.extra}</span>

</div>

</motion.div>

))

}

</div>

</section>

)

}