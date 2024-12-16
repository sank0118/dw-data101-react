import React from "react";
import "./Footer.css";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div>
        질문이 있으신가요?문의전화 <a href="">01230-1230-123(수신자 부담)</a>
      </div>
      <div>
        <ul>
          <li>
            <a href="">1AA</a>
          </li>
          <li>
            <a href="">2AA</a>
          </li>
          <li>
            <a href="">3AA</a>
          </li>
          <li>
            <a href="">4AA</a>
          </li>
          <li>
            <a href="">5AA</a>
          </li>
          <li>
            <a href="">6AA</a>
          </li>
          <li>
            <a href="">7AA</a>
          </li>
          <li>
            <a href="">8AA</a>
          </li>
          <li>
            <a href="">9AA</a>
          </li>
          <li>
            <a href="">10AA</a>
          </li>
          <li>
            <a href="">11AA</a>
          </li>
          <li>
            <a href="">12AA</a>
          </li>
          <li>
            <a href="">13AA</a>
          </li>
          <li>
            <a href="">14AA</a>
          </li>
          <li>
            <a href="">15AA</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="lang">
          <IoLanguage /> 언어
        </button>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
