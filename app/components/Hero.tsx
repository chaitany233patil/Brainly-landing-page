import { Indicator } from "./Indicator";

export const Hero = () => {
  return (
    <div className="h-full w-screen mt-[-170px]">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col xl:ml-18 xl:min-w-110 mt-10">
          <div className="flex">
            <Indicator Text={"Build Using NextJs"} />
          </div>
          <div className="text-[78px] sm:text-[75px] font-[510] text-center sm:text-start leading-23 sm:leading-19 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-600 mt-6">
            Your <br /> Second Brain
          </div>
          <div className=" text-purple-100/70 text-center font-normal sm:text-start sm:text-[18px] mt-4 leading-7">
            Capture, organize, and seamlessly connect your knowledge in one
            place. Effortlessly store videos, text snippets, tweets, articles,
            and more all intelligently searchable with the power of an AI agent.
          </div>
          <div className="flex">
            <button className="font-sans text-xl sm:text-[16px] bg-purple-700 hover:bg-purple-800 text-white py-2 px-5 rounded-xl mt-8 cursor-pointer shadow-sm shadow-purple-600">
              Get Started Now
            </button>
          </div>
        </div>
        <img
          className="rounded-xl sm:rounded-2xl"
          src="/hero-image.png"
          alt="hero image"
        />
      </div>
    </div>
  );
};
