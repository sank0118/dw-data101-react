import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
import Langbtn from "./Langbtn";

const Header = () => {
  return (
    <header>
      <div id="hel">
        <button className="title">
          <SiNetflix />
        </button>
      </div>
      <div id="her">
        <ul>
          <li>
            <button className="lang">
              <IoLanguage /> 언어
            </button>
          </li>
          <li>
            <button>
              <Langbtn />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
