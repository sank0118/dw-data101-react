import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import Langbtn from "./Langbtn";
const Header = () => {
  return (
    <header>
      <button className="title">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <Langbtn />
        </li>
        <li>
          <button className="btn l">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
