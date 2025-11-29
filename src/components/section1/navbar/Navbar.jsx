import React from "react";
import SiteName from "./SiteName";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-12 md:py-8 py-2 gap-2 ml-2">
      <SiteName />
      <Links />
    </div>
  );
};

export default Navbar;
