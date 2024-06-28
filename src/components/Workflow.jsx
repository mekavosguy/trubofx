import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/male.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Why We{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Started!!!
          </span>
        </h2>
        <h5 className="mt-8 mb-6 text-xl ">
          Many professionals are interested in Forex trading but are deterred by
          the financial risk and complexity involved. They need a risk-free way
          to learn and practice trading while receiving real-time feedback and
          guidance.
        </h5>
      </div>
      <div className="flex flex-wrap justify-center p-10">
        <div className="p-2 w-full lg:w-1/2 ">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-1 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
