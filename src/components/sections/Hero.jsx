import { motion } from "motion/react";
// import GundamHero from "../../assets/Gundam-RX.jpeg"
import MeHero from "../../assets/me.png"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return <motion.section 
      className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-[5%] bg-gray-50"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8, delay: 0.2}}
      >
      
      {/* Left Content */}
      <motion.div className="md:w-1/2 space-y-6 text-center md:text-left"
        initial={{opacity: 0, x:-50}} animate={{opacity: 1, x:0}} transition={{duration: 0.8, delay: 0.4}}
      >
        <h1 className="text-xl md:text-2xl">Hi, I’m </h1>
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800">
          <span className="text-[#feb81c]">
            <Typewriter
              options={{
                strings: ['Harish Kurup'],
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                delay: 195, 
              }}
            />            
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600">
          Full Stack Developer | React | Node.js
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
          I build modern web applications with a focus on clean UI, 
          performance, and scalability. Passionate about Tailwind, 
          React, and backend systems.
        </p>
        <div className="space-x-4">
          <a href="#contact" 
             className="px-6 py-3 bg-[#feb81c] text-white font-medium rounded-full shadow hover:bg-[#e0a312] transition"
          >
            Hire Me
          </a>    
          <a href="https://github.com/harishkurup" 
             className="px-6 py-3 border border-[#feb81c] text-[#feb81c] font-medium rounded-full hover:bg-[#feb81c] hover:text-white transition"
             target="_blank"
          >
            Go to &nbsp;
            <i class="devicon-github-original"></i>
          
          </a>
        </div>
      </motion.div>

      {/* Right Image with Polaroid Frame */}
      <motion.div 
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center mb-12" // added bottom margin
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className="bg-white p-2 sm:p-3 pb-8 sm:pb-10 shadow-xl rounded-sm"
          animate={{ y: [0, -10, 0] }} // smaller float on mobile
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <motion.img 
            src={MeHero} 
            alt="Profile" 
            className="w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover border border-gray-300"
          />
        </motion.div>
      </motion.div>
    </motion.section>
}

export default Hero