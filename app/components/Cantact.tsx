export const Contact = () => {
  return (
    <div className="bg-[#333348] flex justify-center p-3">
      <div className="mt-20 max-w-[1000px] flex flex-col items-center p-20 custom-radial-bg">
        <div className="flex bg-[#D0A1F19C] items-center gap-2 py-2 px-3 rounded-full mb-8">
          <div className="h-[8px] w-[8px] bg-purple-950 rounded-full"></div>
          <div className="text-[17px] font-bold font-sans">Get Started</div>
        </div>
        <div className="text-white text-[40px] sm:text-[50px] text-center leading-13 sm:leading-14">
          Ready to Supercharge Your Knowledge?
        </div>
        <button className="font-sans text-xl sm:text-2xl bg-purple-700 text-white py-3 px-6 rounded-full font-bold mt-15">
          Get Started
        </button>
      </div>
    </div>
  );
};
