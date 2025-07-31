"use client";

import { Indicator } from "./Indicator";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="h-full w-screen mt-[-170px]">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col px-5 xl:ml-18 xl:min-w-110 mt-10">
          <div className="flex justify-center sm:justify-start">
            <Indicator Text={"Build Using NextJs"} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-[75px] font-[510] text-center sm:text-start leading-14 sm:leading-19 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-600 mt-6"
          >
            Your Second Brain
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="tracking-wide text-lg text-purple-100/70 text-center font-normal sm:text-start mt-4 leading-6"
          >
            Capture, organize, and connect your knowledge in one place with
            AI-powered search for videos, text, tweets, articles, and more.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center sm:justify-start"
          >
            <button className="text-lg tracking-wider sm:text-[14px] bg-purple-600 hover:bg-purple-800 text-white py-2 px-5 rounded-lg mt-8 cursor-pointer shadow-sm shadow-purple-600">
              Get Started Now
            </button>
          </motion.div>
        </div>
        <img
          className="hero-image rounded-xl sm:rounded-2xl mr-6 ml-4 xl:mx-0"
          src="/hero-image.png"
          alt="hero image"
        />
      </div>
    </div>
  );
};
