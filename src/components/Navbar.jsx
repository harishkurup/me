import { motion } from "motion/react";
import { useState } from "react";
import Logo from "/Logo.png";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-[5%] bg-white shadow-md sticky top-0 z-[1000]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <motion.a href="/me" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-14 w-14 rounded-full border border-gray-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.7 },
            }}
          />
        </motion.a>
      </div>

      {/* Desktop Links */}
      <motion.ul
        className="hidden md:flex space-x-6 text-gray-700 font-medium"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#skills"
            className="hover:text-[#feb81c]"
            title="Skills"
            aria-label="Skills"
          >
            <i className="fa-solid fa-user-gear"></i>
          </a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#contact"
            className="hover:text-[#feb81c]"
            title="Contact"
            aria-label="Contact"
          >
            <i className="fa-solid fa-address-card"></i>
          </a>
        </motion.li>
      </motion.ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="absolute top-[70px] right-5 bg-white shadow-lg rounded-md p-4 space-y-4 text-gray-700 font-medium md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <li>
            <a
              href="#skills"
              className="hover:text-[#feb81c] block"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-user-gear"></i> Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#feb81c] block"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-address-card"></i> Contact
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
