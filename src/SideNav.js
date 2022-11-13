import React from "react";
import SideItem from "./SideItem";
import { NavItems } from "./NavItemsData";

const SideNav = () => {

  return (
    <div className="container">
    <div style={sideNavStyle}>
      <h2 style={headerStyle}>Categories</h2>
      {NavItems.map((navItem, index) => {
        return <SideItem key={index} items={navItem} />;
        })}     
    </div>
    </div>
  );
};
//styling
const sideNavStyle = {
  height: "75vh",
  width: "230px",
  background:
   "#1F4035",
  position: "absolute",
  border:"1px solid transparent",
  left: 0,
  textAlign: "left",
};
const headerStyle = {
  fontWeight: "400",
  padding: "0px 20px",
  color: "#EBF3F6",
};



export default SideNav;