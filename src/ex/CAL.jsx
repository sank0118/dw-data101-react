import React from "react";
import "./CAL.css";
const CAL = () => {
  return (
    <div className="cal">
      <div className="l">
        <h4>캘린더</h4>
        <div>
          <h1>12.16</h1>
          <p>월</p>
        </div>
      </div>

      <div className="r">
        <p className="b">일</p>
        <p className="b">월</p>
        <p className="b">화</p>
        <p className="b">수</p>
        <p className="b">목</p>
        <p className="b">금</p>
        <p className="b">토</p>
        {Array.from({ length: 31 }).map((_, i) => (
          <p key={i}>{i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default CAL;
