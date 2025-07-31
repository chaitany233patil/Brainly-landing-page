"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { BookMarked, Bot, Link, NotebookPen } from "lucide-react";
import { Indicator } from "./Indicator";

export const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const Fetures = [
    {
      icon: Bot,
      title: "AI-Power Search",
      description:
        "Quickly find any piece of content with our inteligent search agent",
    },
    {
      icon: BookMarked,
      title: "Versatile Content Storage",
      description:
        "Store Videos, text snippets, tweets, and more in one place.",
    },
    {
      icon: Link,
      title: "Seamless Connections",
      description:
        "Easily link related content to build a network of knowledge.",
    },
    {
      icon: NotebookPen,
      title: "Smart Notes",
      description: "Create and manage smart notes that adapt to your workflow.",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="flex flex-col items-center mt-20">
      <Indicator Text={"Features"} />
      <motion.div
        initial={{ y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200/50 to-neutral-400 font-medium sm:text-5xl text-3xl text-center max-w-250 font-serif sm:leading-13 mt-8 px-2"
      >
        Explore powerful features that <br /> elevate your{" "}
        <span className="ml-2 font-subheading italic">knowledge</span>
      </motion.div>
      <p className="text-purple-100/70 text-lg sm:text-xl mt-8 text-center leading-6 sm:leading-0">
        From intelligent search to seamless <br /> organization — everything you
        need to build your second brain.
      </p>
      <div className="relative flex justify-center">
        <div className="w-full mt-4 hidden lg:block">
          <img
            src={"/grid-lines.svg"}
            alt="grid image"
            className="mx-auto w-270 h-auto"
          />
        </div>
        <div className="lg:absolute mt-20 lg:top-28 grid grid-cols-1 md:grid-cols-2 gap-30">
          {Fetures.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center justify-center w-[100%] h-[100%] z-20"
            >
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: index % 2 ? -20 : 20 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="my-box flex flex-col items-center w-[300px] justify-center"
              >
                <div className="text-[22px] p-2 mb-10 font-bold text-purple-950 text-center bg-purple-600/90 rounded-lg ring-16  ring-purple-500/15">
                  <feature.icon className="size-6" />
                </div>
                <div className="text-xl font-bold  text-neutral-200/80 text-center mb-2">
                  {feature.title}
                </div>
                <div className="text-[15px] text-[#786969] text-center">
                  {feature.description}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
