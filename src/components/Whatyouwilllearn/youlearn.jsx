import React from "react";
import "./youlearn.css";
import { hitFeatures } from "../../constants";
const Youlearn = () => {
  return (
    <div className="hit-wrapper">
      <div className="conatiner">
        <div className="hit-container">
          {/*header */}

          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              What You'll{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                Learn!!!
              </span>
            </h2>
            <h5 className="mt-8 mb-6 text-xl ">
              Our class offers a clear path to mastering Forex trading,
              empowering you with the knowledge and skills for financial
              independence and the flexibility to trade on your terms.
            </h5>
          </div>

          {/*features */}

          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <div className="hiw-feature" key={i}>
                <div className="detail">
                  <div className="des">0{i + 1}</div>
                  <h1 className="sec-title">{feature.title}</h1>
                  <p className="text">{feature.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youlearn;
