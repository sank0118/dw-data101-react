import React from "react";
import "./Footer.css";
import { IoLanguageOutline } from "react-icons/io5";
import Langbtn from "./Langbtn";
const Footer = () => {
  return (
    <footer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 000000000 </p>

      <ul>
        <li>
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">3</a>
        </li>
        <li>
          <a href="">4</a>
        </li>
        <li>
          <a href="">5</a>
        </li>
        <li>
          <a href="">6</a>
        </li>
        <li>
          <a href="">7</a>
        </li>
        <li>
          <a href="">8</a>
        </li>
        <li>
          <a href="">9</a>
        </li>
        <li>
          <a href="">10</a>
        </li>
        <li>
          <a href="">11</a>
        </li>
      </ul>
      <div className="wrap">
        <Langbtn />
      </div>

      <div className="t">
        <p>넷플릭스 코리아</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorem
          quidem, iusto nihil, amet ratione tempore aliquid commodi, perferendis
          distinctio eligendi inventore fuga accusantium autem. Est placeat
          architecto accusamus omnis!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
