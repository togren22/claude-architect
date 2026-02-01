"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { ComparisonSlider } from "./ComparisonSlider";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient - Removed for light theme as requested */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-sm text-neutral-600 mb-4"
        >
          <Terminal className="w-4 h-4" />
          <span>v2.0 Now Available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#1a1a18] max-w-4xl"
        >
          Don't Settle for{" "}
          <motion.span
            className="text-neutral-400 inline-block"
            animate={{
              x: [0, -2, 2, -1, 1, 0],
              filter: [
                "blur(0px)",
                "blur(2px)",
                "blur(0px)",
                "blur(1px)",
                "blur(0px)",
              ],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            Slop.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-500 max-w-2xl"
        >
          GPT guesses. Claude builds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="https://claude.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#da7756] text-white font-semibold rounded-full hover:bg-[#c46645] transition-all flex items-center justify-center gap-2"
          >
            Try Claude Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://platform.claude.com/docs/en/home"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent text-[#1a1a18] border border-neutral-300 font-semibold rounded-full hover:bg-neutral-100 transition-all flex items-center justify-center"
          >
            Read the Docs
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full flex justify-center px-2"
      >
        <ComparisonSlider />
      </motion.div>
    </section>
  );
};
