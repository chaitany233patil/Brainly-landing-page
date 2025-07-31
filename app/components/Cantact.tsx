"use client";

import { Indicator } from "./Indicator";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className=" flex justify-center p-3 mb-40">
      <div className="mt-20 w-full max-w-[1000px] flex flex-col items-center p-20 custom-radial-bg ">
        <Indicator Text={"Join Us"} />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-neutral-500 text-[40px] sm:text-6xl text-center leading-13 sm:leading-14 max-w-[600px] mt-10"
        >
          Take the next <br />
          step <span className="italic"> today.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-purple-100/70 text-xl text-center mt-8 leading-6 sm:leading-7"
        >
          Join thousands of users who are transforming their knowledge
          management with Second Brain.
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans text-lg sm:text-[16px] bg-purple-600 hover:bg-purple-800 text-white py-2 px-5 rounded-lg mt-8 cursor-pointer"
        >
          Get Started Now
        </motion.button>
      </div>
    </div>
  );
};
