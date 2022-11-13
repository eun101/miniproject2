import React from "react";

const SideItem = ({items}) => {
  const {name, links, open } = items;
  const [isOpen, setOpen] = React.useState(open);

  const openSideNav = () => {
     setOpen(!isOpen);
  };

  return(
    <div onClick={() => openSideNav()} style={sideItemStyle}>
      <p style={nameStyle}>{name}</p>
      {isOpen && 
        links.map((link, index) => {
        const { title, to } = link;
      return (
         <div key={index} style={linkContainerStyle}>
           <a href={to} style={linkStyle}>
           <p style={nameStyle}>{title}</p>
           </a>
        </div>
       );
      })}
    </div>
  );
};

//styling
const nameStyle = {
  margin: "5px",
  fontWeight: "300",
};
const sideItemStyle =  {
  height: "auto",
  minHeight: "40px",
  width: "350px",
  borderTop:"none",
  color:"white",
  display:"flex",
  alignItems: "flex-start",
  flexDirection:"column",
  
};
const linkContainerStyle = {
  height:"auto",
  width:"200px",
  background:"#1F4035",
  borderTop:"3px solid #1F4035", 
};

const linkStyle = {
  textDecoration:"none",
  color:"#555555",
};

export default SideItem;