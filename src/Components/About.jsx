import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="p-8 md:p-16 w:90% bg-zinc-400 text-white" id="aboutus">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 text-pink-500"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl leading-relaxed mb-8"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Welcome to Coimbatore's premier food delivery service, where passion meets flavor! Our mission is to bring you the finest culinary experiences from the top hotels in the city, right to your doorstep.
      </motion.p>
      <motion.p
        className="text-lg md:text-xl leading-relaxed mb-8"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        In partnership with the most renowned hotels, we curate a diverse menu that caters to every palate. From cozy cafes to luxurious restaurants, our platform connects you with the best culinary delights the city has to offer.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-500">Varieties of Dishes</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Indulge in a feast of flavors with our extensive selection of dishes. From local delicacies to international cuisines, our menu is a celebration of diversity and culinary excellence.
          </p>
        </motion.div>
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-500">City's Finest Hotels</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            We take pride in collaborating with the city's finest hotels and eateries, ensuring that every meal is a delightful experience. Our partners share our commitment to quality, freshness, and exceptional service.
          </p>
        </motion.div>
      </div>
    </div>
);
};
  


export default About