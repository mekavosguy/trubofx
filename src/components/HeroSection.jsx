import forex from "../assets/hero/forex.jpeg";
import video2 from "../assets/video2.mp4";
import curve from "../assets/hero/curve.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[-1rem]">
        <h1 className="h1 mb-6 ">
          <span className="text-orange-500 bg-white p-1 rounded-2xl">
            4-Week
          </span>{" "}
          Forex Bootcamp <br></br>Learn Everything and&nbsp;Trade with a{` `}
          <span className="inline-block relative">
            Funded Account{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Transform your life with financial and time independence. Start your
          Forex journey with our comprehensive training.
        </p>
      </div>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src={forex}
          className="rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
