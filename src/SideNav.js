import React from "react";
import SideItem from "./SideItem";
import { NavItems } from "./NavItemsData";

const SideNav = () => {

  return (
    <div className="container">
    <div style={sideNavStyle}>
      <h3 style={headerStyle}>Side Navigation</h3>
      {NavItems.map((navItem, index) =>{
        return <SideItem key={index} items={navItem} />;
        })}     
    </div>
    </div>
  );
};
//styling
const sideNavStyle = {
  height: "100vh",
  width: "350px",
  background:
   "linear-gradient(135deg, rgba(55,82,131,1) 0% rgba(20,96,194)",
  position: "absolute",
  border:"1px solid transparent",
  left: 0,
  textAlign: "left",
};
const headerStyle = {
  fontWeight: "600",
  padding: "0px 20px",
  color: "#fff",
};



export default SideNav;