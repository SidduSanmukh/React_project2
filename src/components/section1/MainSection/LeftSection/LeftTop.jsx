import React from "react";
import Arrow from "./Arrow";

const LeftTop = () => {
  return (
    <div className="md:gap-80 w-1/4 h-full flex flex-col justify-between gap-10">
      <div className=" md:w-full w-90 md:ml-4 flex flex-col">
        <h1 className="md:font-bold md:text-5xl text-4xl md:mb-4 mb-4 font-bold">
          Abhinaya <br />
          Chakravarthy
          <br />
          Kiccha Sudeepa
          <br />
        </h1>
        <p>
          A popular Indian actor, director, and producer known for his powerful
          performances, versatile roles, deep voice, and major contributions to
          Kannada cinema and pan-Indian films.
        </p>
      </div>
      <Arrow />
    </div>
  );
};

export default LeftTop;
