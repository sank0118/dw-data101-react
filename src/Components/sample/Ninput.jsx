import React from "react";
import "./Ninput.css";

const Ninput = () => {
  return (
    <div className="ni">
      <p>
        시청할 준비가 되셨나요? 멤버쉽을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <input type="text" placeholder="이메일을 입력해주새요." />
      <div className="btn">
        <button>시작하기</button>
      </div>
    </div>
  );
};

export default Ninput;
