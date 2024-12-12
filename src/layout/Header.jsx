import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { IoLanguageOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <button className="n">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <button className="h la">
            <IoLanguageOutline />
            언어
          </button>
        </li>
        <li>
          <button className="h l">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
