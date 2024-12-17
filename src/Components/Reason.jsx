// import React from "react";
// import "./Reason.css";
// import { IoMdTv } from "react-icons/io";
// import { GrTransaction } from "react-icons/gr";
// import { PiBaby } from "react-icons/pi";
// import { MdOutlineImportantDevices } from "react-icons/md";

// const reasons = [
//   { desc: "취향에 딱 맞는 이야기", icon: IoMdTv },
//   { desc: "언제든지 해지 또는 전환 가능한 멤버쉽", icon: GrTransaction },
//   { desc: "아이들만을 위한 공간", icon: PiBaby },
//   {
//     desc: "다양한 디바이스로 시청하세요",
//     icon: MdOutlineImportantDevices,
//   },
// ];
// const Reason = () => {
//   return (
//     <div className="re">
//       <h3>가입해야 하는 또 다른 이유</h3>

//       <ul>
//         {reasons.map((r, i) => {
//           return (
//             <li key={i}>
//               <div>
//                 <p>{r.desc}</p>
//                 <r.icon />
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// export default Reason;
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
  { desc: "다양한 디바이스로 시청하세요", icon: MdOutlineImportantDevices },
];

const Reason = () => {
  return (
    <div className="re">
      <h3>가입해야 하는 또다른 이유</h3>

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

export default Reason;
