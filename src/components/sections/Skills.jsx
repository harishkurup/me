import { motion } from "framer-motion"
import SkillList from '../../constants/skills';

const Skills = () => {

  return <motion.section id="skills" 
      className="w-full min-h-screen px-[5%] py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
  >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Partition */}
        <motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-[#feb81c]">Skills</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I specialize in building modern, scalable, and user-friendly 
            web applications. My expertise spans frontend design, backend 
            development, and everything in between.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I enjoy working with both established technologies and 
            experimenting with new ones to create impactful digital experiences.
          </p>
        </motion.div>

        {/* Right Partition (Devicon Grid) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 text-center">
          {SkillList.map((skill, index) => {
            return <motion.div id={index} className="flex flex-col items-center" 
              animate={{ y: [0, -20, 0] }}   // move up and down
              transition={{ 
                duration: 4,    // slower floating
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <i className={skill.icon}></i>
              {/* <span className="text-gray-700 text-sm mt-2">{skill.label}</span> */}
            </motion.div>
          })}
         
        </div>        

      </div>
    </motion.section>
}

export default Skills