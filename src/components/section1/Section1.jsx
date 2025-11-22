import React from "react";
import Navbar from "./navbar/Navbar";
import MainSection from "./MainSection/MainSection";

const Section1 = props => {
  console.log(props.users);
  return (
    <div>
      <Navbar />
      <MainSection users={props.users} />
    </div>
  );
};

export default Section1;
