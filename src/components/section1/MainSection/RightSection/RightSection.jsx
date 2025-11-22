import React from "react";
import Cards from "./Cards";

const RightSection = props => {
  return (
    <div className="RightSection w-2/3 ml-8 flex flex-nowrap gap-6 h-full shrink-0 overflow-x-scroll">
      {props.users.map(function (user, idx) {
        return (
          <Cards
            id={idx}
            name={user.name}
            description={user.description}
            image={user.image}
            status={user.status}
          />
        );
      })}
    </div>
  );
};

export default RightSection;
