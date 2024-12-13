import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import "./Langbtn.css";

const Langbtn = () => {
  return (
    <button className="btn">
      <IoLanguageOutline />
      언어
    </button>
  );
};

export default Langbtn;