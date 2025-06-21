export const Contact = () => {
  return (
    <div className="bg-[#333348] flex justify-center p-3 mb-40">
      <div className="mt-20 max-w-[1000px] flex flex-col items-center p-20 custom-radial-bg">
        <div className="flex bg-[#D0A1F19C] items-center gap-2 py-2 px-3 rounded-full mb-6">
          <span className="relative flex size-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-900 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-purple-950"></span>
          </span>
          <div className="text-[12px] font-bold font-sans">Join us</div>
        </div>
        <div className="text-white text-[40px] sm:text-[38px] text-center leading-13 sm:leading-12 max-w-[600px]">
          Ready to Supercharge Your Knowledge?
        </div>
        <div className="text-[#786969] text-[20px] text-center mt-8">
          Join thousands of users who are transforming their knowledge
          management with Second Brain.
        </div>
        <button className="font-sans text-xl sm:text-[16px] bg-purple-700 hover:bg-purple-800 text-white py-2 px-5 rounded-full font-bold mt-8 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};
