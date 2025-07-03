import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[650px] items-center bg-white text-2xl px-8 md:px-20 py-10">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col gap-4 items-start justify-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-blue-800 text-2xl"
        >
          Hey There 👋 I am
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-bold text-5xl"
        >
          Muzaffar Hussain
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl"
        >
          <span className="text-gray-500">Professional</span>{' '}
          <span className="font-semibold">Web Developer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-500 text-base md:text-lg"
        >
          Passionate Junior Web Developer with hands-on experience in WordPress and the MERN stack (MongoDB, Express.js, React, Node.js). Skilled in building responsive, user-friendly websites and web applications using modern front-end technologies (React, Tailwind) and back-end frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 mt-4 text-white font-medium"
        >
          <button className="bg-blue-500 py-3 px-8 rounded-2xl hover:bg-blue-600 transition duration-300">
            Contact
          </button>
          <button className="bg-blue-800 py-3 px-8 rounded-2xl hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex-1 flex items-center justify-center mt-10 md:mt-0"
      >
        <img
          className="rounded-2xl w-full max-w-xs md:max-w-sm lg:max-w-md"
          src="./src/assets/pic.jpg"
          alt="Muzaffar Hussain"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
