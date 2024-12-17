import React from "react";
import "./Reason.css";
import { IoMdTv } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { PiBaby } from "react-icons/pi";
import { MdOutlineImportantDevices } from "react-icons/md";

const reasons = [
  { desc: "취향에 딱 맞는 이야기", icon: IoMdTv },
  { desc: "언제든지 해지 또는 전환 가능한 멤버쉽", icon: GrTransaction },
  { desc: "아이들만을 위한 공간", icon: PiBaby },
  {
    desc: "다양한 디바이스로 시청하세요",
    icon: MdOutlineImportantDevices,
  },
];
const Reason = () => {
  return (
    <div className="re">
      <h3>가입해야 하는 또 다른 이유</h3>

      <ul>
        {reasons.map((r, i) => {
          return (
            <li key={i}>
              <div>
                <p>{r.desc}</p>
                <r.icon />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// const Reason = () => {
//   return (
//     <div className="re">
//       <h3>가입해야 하는 또 다른 이유</h3>
//       <ul>
//         <li>
//           <div>
//             <p>취향에 딱 맞는 이야기</p>
//             <IoMdTv />
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>언제든지 해지 또는 전환 가능한 멤버쉽</p>
//             <GrTransaction />
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>아이들만을 위한 공간</p>
//             <PiBaby />
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>다양한 디바이스로 시청하세요</p>
//             <MdOutlineImportantDevices />
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// import React from "react";

// const reasons = [
//   { desc: 1, x: 1 },
//   { desc: 2, x: 2 },
//   { desc: 3, x: 3 },
//   { desc: 4, x: 4 },
// ];

// const Reason = () => {
//   return (
//     <div>
//       <h1>MAP {reasons.length} 개</h1>
//       <ul>
//         {reasons.map((r, i) => {
//           return <li key={i}>{r.desc}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

export default Reason;
