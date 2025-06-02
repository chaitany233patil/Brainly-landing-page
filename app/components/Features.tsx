"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { BookMarked, Bot, Link, NotebookPen } from "lucide-react";

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
    <div className="bg-[#333348] flex flex-col items-center">
      <div className="flex bg-[#D0A1F19C] items-center gap-2 py-2 px-3 rounded-full mb-6">
        <div className="h-[8px] w-[8px] bg-purple-950 rounded-full"></div>
        <div className="text-[12px] font-bold font-sans">
          Build Using NextJs
        </div>
      </div>
      <div className="text-white sm:text-[32px] text-[22px] text-center max-w-250 font-serif font-bold sm:leading-11">
        Explore the powerful features designed to enhance your knowledge
        management
      </div>

      <div className="md:grid md:grid-cols-2 mt-10">
        <div className="md:pr-[2px] bg-gradient-to-b from-[#333348] via-white to-[#333348]">
          <div className="flex flex-col items-center justify-center px-8 bg-[#333348] py-20 w-[100%] h-[100%]">
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
        </div>

        <div className="md:pb-[2px] bg-gradient-to-r from-[#333348] via-white to-[#333348]">
          <div className="b flex flex-col items-center justify-center px-8 py-20 bg-[#333348] w-[100%] h-[100%]">
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
        </div>

        <div className="md:pt-[2px] bg-gradient-to-r from-[#333348] via-white to-[#333348]">
          <div className="c flex flex-col items-center justify-center px-8 bg-[#333348] py-20 w-[100%] h-[100%]">
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
        </div>

        <div className="md:pl-[2px] bg-gradient-to-b from-[#333348] via-white to-[#333348]">
          <div className="d flex flex-col items-center justify-center px-30 bg-[#333348] py-20 w-[100%] h-[100%]">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-[300px] p-5 justify-center"
            >
              <div className="text-[22px] mb-3 font-bold text-purple-950 text-center bg-[#A161D057] py-2.5 px-3 rounded-xl ring-10 ring-[#00000040]">
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
