import React from "react";
import Heading from "./LeftSection/LeftTop";
import RightSection from "./RightSection/RightSection";

const MainSection = props => {
  console.log(props.users);
  return (
    <div className="md:h-full md:flex flex-col md:flex-row px-4 md:py-14 py-6 h-full flex gap-10 md:overflow-hidden">
      <Heading />
      <RightSection users={props.users} />
    </div>
  );
};

export default MainSection;
