import React from "react";
import "./Sinput.css";
const Sinput = () => {
  return (
    <div className="ni">
      <p>
        시청할 준비가 되셨나요? 멤버쉽을 등럭하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <input type="text" placeholder="이메일 주소" />
      <div>
        <button className="btn">시작하기</button>
      </div>
    </div>
  );
};

export default Sinput;
