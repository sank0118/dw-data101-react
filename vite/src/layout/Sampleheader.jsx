// import React from "react";
// import "./Header.css";
// import { SiNetflix } from "react-icons/si";
// import Langbtn from "./Langbtn";
// const Header = () => {
//   return (
//     <header>
//       <button className="title">
//         <SiNetflix />
//       </button>
//       <ul>
//         <li>
//           <Langbtn />
//         </li>
//         <li>
//           <button className="btn l">로그인</button>
//         </li>
//       </ul>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import "./Sampleheader.css";
import { SiNetflix } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
// import { SampleLangbtn } from "./SampleLangbtn";
const Sampleheader = () => {
  return (
    <header>
      <div>
        <button id="title">
          <SiNetflix />
        </button>
      </div>
      <div>
        <ul>
          <li>
            <button className="lang">
              {/* <SampleLangbtn /> */}
              <IoLanguage />
              언어
            </button>
          </li>
          <li>
            <button className="l">로그인</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Sampleheader;
