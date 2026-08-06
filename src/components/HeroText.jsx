import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 md:mt-40 w-full max-w-full px-4 text-center md:text-left">
      {/* Desktop */}
      <div className="hidden md:flex flex-col c-space">
        <motion.h1
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Suvit!
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer
            <br />
            Dedicated to Crafting
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="max-w-full"
          >
            <FlipWords
              words={words}
              className="text-6xl lg:text-8xl font-black text-white break-words"
            />
          </motion.div>

          <motion.p className="text-4xl font-medium text-neutral-300">
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center space-y-5 md:hidden">
        <motion.p
          className="text-3xl sm:text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Suvit!
        </motion.p>

        <motion.p
          className="text-4xl sm:text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Building
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
          className="max-w-full"
        >
          <FlipWords
            words={words}
            className="text-5xl sm:text-6xl font-bold text-white break-words"
          />
        </motion.div>

        <motion.p
          className="text-3xl sm:text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Applications
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;