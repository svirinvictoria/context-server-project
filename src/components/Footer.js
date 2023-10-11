import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return <h2 className="ftr-style">{props.inputValue}, {props.selectMessage}</h2>;
};

export default Footer;
