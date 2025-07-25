"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { BookMarked, Bot, Link, NotebookPen } from "lucide-react";
import { Indicator } from "./Indicator";

export const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="flex flex-col items-center mt-20">
      <Indicator Text={"Features"} />
      <div className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200/50 to-neutral-400 font-medium sm:text-5xl text-[22px] text-center max-w-250 font-serif sm:leading-13 mt-8">
        Explore powerful features that <br /> elevate your{" "}
        <span className="ml-2 font-subheading italic">knowledge</span>
      </div>
      <p className="text-purple-100/70 text-xl mt-8 text-center">
        From intelligent search to seamless <br /> organization — everything you
        need to build your second brain.
      </p>
      <div className="relative">
        <div className="w-full mt-10">
          <img src={"/grid-lines.svg"} alt="grid image" className="mx-auto" />
        </div>
        <div className="absolute top-0 md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center px-8 py-20 w-[100%] h-[100%]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="my-box flex flex-col items-center w-[300px] p-5 justify-center"
            >
              <div className="text-[22px] mb-3 font-bold text-purple-950 text-center bg-[#A161D057] py-2.5 px-3 rounded-xl ring-10 ring-[#00000040]">
                <Bot />
              </div>
              <div className="text-[22px] font-bold text-white text-center">
                AI-Power Search
              </div>
              <div className="text-[15px] text-[#786969] text-center font-bold">
                Quickly find any piece of content with our inteligent search
                agent.
              </div>
            </motion.div>
          </div>

          <div className="b flex flex-col items-center justify-center w-[100%] h-[100%]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-[300px] p-5 justify-center"
            >
              <p className="text-[22px] mb-3 font-bold text-purple-950 text-center bg-[#A161D057] py-2.5 px-3 rounded-xl ring-10 ring-[#00000040]">
                <BookMarked />
              </p>
              <div className="text-[22px] font-bold text-white text-center">
                Versatile Content Storage
              </div>
              <div className="text-[15px] text-[#786969] text-center font-bold">
                Store Videos, text snippets, tweets, and more in one place.
              </div>
            </motion.div>
          </div>

          <div className="c flex flex-col items-center justify-center px-8 py-20 w-[100%] h-[100%]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-[300px] p-5 justify-center"
            >
              <div className="text-[22px] mb-3 font-bold text-purple-950 text-center bg-[#A161D057] py-2.5 px-3 rounded-xl ring-10 ring-[#00000040]">
                <Link />
              </div>
              <div className="text-[22px] font-bold text-white text-center">
                Seamless Connections
              </div>
              <div className="text-[15px] text-[#786969] text-center font-bold">
                Easily link related content to build a network of knowledge.
              </div>
            </motion.div>
          </div>

          <div className="d flex flex-col items-center justify-center w-[100%] h-[100%]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-[300px] justify-center"
            >
              <div className="text-[22px] mb-3 font-bold text-center bg-[#A161D057] py-2.5 px-3 rounded-xl ring-10 ring-[#00000040]">
                <NotebookPen />
              </div>
              <div className="text-[22px] font-bold text-white text-center">
                Smart Notes
              </div>
              <div className="text-[15px] text-[#786969] text-center font-bold">
                Create and manage smart notes that adapt to your workflow.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
