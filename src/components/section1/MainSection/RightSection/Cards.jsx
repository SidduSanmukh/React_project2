import React from "react";
import { ArrowRight } from "lucide-react";
const Cards = props => {
  return (
    <div className=" bg-gray-200 shrink-0 rounded-4xl w-90 h-full relative overflow-hidden ">
      <img className=" w-full h-full object-cover" src={props.image} alt="" />
      <div className="top-0 flex flex-col justify-between left-0 h-full w-full absolute p-8">
        <h1 className="bg-white rounded-full w-11 text-center flex justify-center items-center h-11 font-bold ">
          {props.id + 1}
        </h1>
        <div className="text-white">
          <p>
            {props.description}
          </p>
          <div className="flex justify-between mt-6">
            <button className="bg-yellow-600 p-1 rounded-3xl text-shadow-2xs px-4 ">
              {props.status}
            </button>
            <p className="bg-yellow-600 p-1 rounded-3xl text-shadow-2xs ">
              <ArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
