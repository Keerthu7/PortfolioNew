import React from 'react';
import { motion } from 'framer-motion';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <motion.section id="intro">
      <motion.div
        className="introContent"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        <motion.span className="hello" variants={fadeIn}>
          Hello,
        </motion.span>
        <motion.span className="introText" variants={fadeIn}>
          I’m <span className="introName">Keerthana</span>
          <br /> FullStack Developer
        </motion.span>
        <motion.p className="introPara" variants={fadeIn}>
          I’m a fullstack developer with experience <br /> in web and mobile applications
        </motion.p>
        <Link to="contact" smooth={true} duration={500}>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire me
          </motion.button>
        </Link>
      </motion.div>
      <motion.img
        src={bg}
        alt="profile"
        className="bg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </motion.section>
  );
};

export default Intro;
