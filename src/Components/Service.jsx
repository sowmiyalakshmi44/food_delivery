import React from 'react';
import { motion } from 'framer-motion';

const Service = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="p-8 md:p-16 bg-zinc-400 text-white" id='services'>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 text-pink-500"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Our Services
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-500">Express Delivery</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Enjoy lightning-fast delivery services to get your favorite dishes delivered to your doorstep in no time.
          </p>
        </motion.div>
        <motion.div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-500">Customizable Menus</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Tailor your dining experience by customizing your menu, ensuring every meal is a perfect match for your taste buds.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Service;
