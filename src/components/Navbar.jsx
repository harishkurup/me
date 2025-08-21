import { motion } from "motion/react";
import Logo from "/Logo.png"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  return <motion.nav  
      className="flex justify-between items-center py-6 px-[5%] bg-white shadow-md sticky top-0 z-1000"
      initial={{y:-100}} animate={{y:0}} transition={{duration: 0.6, ease:"easeOut"}}>
     {/* Logo */}
      <div className="flex items-center">
        <motion.a href="/me" whileHover={{scale: 1.10}} whileTap={{scale: 1.00}}>
          <motion.img 
            src={Logo} 
            alt="Logo" 
            className="h-15 w-15 rounded-full border border-gray-300"
            initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.6,
                  scale: { type: "spring", visualDuration: 0.6, bounce: 0.7 },
              }}
          />
        </motion.a>
      </div>
      {/* Links */}
      <motion.ul 
        className="flex space-x-6 text-gray-700 font-medium"
        variants={staggerContainer} 
        initial="initial"
        animate="animate"
      >
        <motion.li variants={fadeInUp}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a href="#skills" className="hover:text-[#feb81c]" title="Skills"><i class="fa-solid fa-user-gear"></i></a></motion.li>
        <motion.li variants={fadeInUp}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a href="#contact" className="hover:text-[#feb81c]" title="Contact Details"><i class="fa-solid fa-address-card"></i></a></motion.li>        
      </motion.ul>

      
  </motion.nav>
}

export default Navbar