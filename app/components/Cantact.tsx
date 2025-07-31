import { Indicator } from "./Indicator";

export const Contact = () => {
  return (
    <div className=" flex justify-center p-3 mb-40">
      <div className="mt-20 w-full max-w-[1000px] flex flex-col items-center p-20 custom-radial-bg ">
        <Indicator Text={"Join Us"} />
        <div className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-neutral-500 text-[40px] sm:text-6xl text-center leading-13 sm:leading-14 max-w-[600px] mt-10">
          Take the next <br />
          step <span className="italic"> today.</span>
        </div>
        <div className="text-purple-100/70 text-[20px] text-center mt-8 leading-6 sm:leading-0">
          Join thousands of users who are transforming their knowledge
          management with Second Brain.
        </div>
        <button className="font-sans text-xl sm:text-[16px] bg-purple-700 hover:bg-purple-800 text-white py-2 px-5 rounded-xl mt-8 cursor-pointer">
          Get Started Now
        </button>
      </div>
    </div>
  );
};
