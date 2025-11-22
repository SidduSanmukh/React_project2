import React from "react";
import Heading from "./LeftSection/LeftTop";
import RightSection from "./RightSection/RightSection";

const MainSection = props => {
  console.log(props.users);
  return (
    <div className="p-14 h-full flex gap-15 ">
      <Heading />
      <RightSection users={props.users} />
    </div>
  );
};

export default MainSection;
