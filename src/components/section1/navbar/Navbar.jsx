import React from "react";
import SiteName from "./SiteName";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex justify-between p-8 ">
      <SiteName />
      <Links />
    </div>
  );
};

export default Navbar;
