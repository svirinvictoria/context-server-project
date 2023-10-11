import React from "react";
import "./Header.css";

const Header = (props) => {
  return <h2 className="hdr-style">{props.inputValue}, {props.selectMessage} </h2>;
};

export default Header;
