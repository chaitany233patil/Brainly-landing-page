import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="h-full bg-[linear-gradient(to_bottom,_#9810FA_0%,_#333348_30%)] pb-20">
      <Navbar />
      <div className="hero-container mt-5 overflow-hidden p-4  ">
        <div className="flex flex-col items-center sm:items-start p-2 sm:pl-23">
          <div className="flex bg-[#D0A1F19C] items-center gap-2 py-2 px-3 rounded-full mb-6">
            <div className="h-[8px] w-[8px] bg-purple-950 rounded-full"></div>
            <div className="text-[12px] font-bold font-sans">
              Build Using NextJs
            </div>
          </div>
          <div className="text-[78px] sm:text-[90px] font-bold text-center sm:text-start leading-23 sm:leading-25 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
            Your Second Brain
          </div>
          <div className="text-[20px] font-bold text-[#B0A8B2] text-center sm:text-start sm:text-[18px] mt-2 leading-7 ">
            Capture, Organize and connect your knowledge effortlessly. store
            Video, Text Snippets, Tweets and more all searchable with AI agent.
          </div>
          <button className="font-sans text-xl sm:text-xl bg-purple-700 text-white py-2 px-5 rounded-full font-bold mt-10">
            Get Started
          </button>
        </div>
        <img
          className="hero-image rounded-xl sm:rounded-2xl mt-10"
          src="/hero-image.png"
          alt="hero image"
        />
      </div>
    </div>
  );
};
