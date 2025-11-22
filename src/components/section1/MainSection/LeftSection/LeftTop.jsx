import React from "react";
import Arrow from "./Arrow";

const LeftTop = () => {
  return (
    <div className=" w-1/4 h-full flex flex-col justify-between gap-80">
      <div>
        <h1 className="font-bold text-5xl mb-4">
          Abhinaya <br />
          Chakravarthy
          <br />
          Kiccha Sudeepa
          <br />
        </h1>
        <p>
          A popular Indian actor, director, and producer known for his powerful performances, versatile roles, deep voice, and major contributions to Kannada cinema and pan-Indian films.
        </p>
      </div>
      <Arrow />
    </div>
  );
};

export default LeftTop;
