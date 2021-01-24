import React from "react";

const Footer = () => {

  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "2px",
    position: "absolute",
    bottom: "0",
    height: "30px",
};

  return (
    <div style={style}>
      <a href="https://github.com/spirka3/bachelor-thesis">Github repository</a>
    </div>
  )
}

export default Footer;
