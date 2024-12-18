import React from "react";
import "./FAQ.css";
import { FaPlus } from "react-icons/fa6";

// const qs = [
//   "어떤 콘텐츠를 시청할 수 있나요?",
//   "넷플릭스란 무엇인가요?",
//   "요금은 얼마인가요?",
//   "어디에서 시청할 수 있나요?",
//   "멤버쉽을 해지할려면 어떻게 하나요?",
//   "아이들이 넷플릭스를 봐도 좋나요?",
// ];

const nqs = [
  { q: "어떤 콘텐츠를 시청할 수 있나요?", a: "lorem" },
  { q: "넷플릭스란 무엇인가요" },
  { q: "요금은 얼마인가요" },
  { q: "어디에서 시청할 수 있나요" },
  { q: "멤버쉽을 해지할려면 어떻게 하나요" },
  { q: "아이들이 넷플릭스를 봐도 좋나요" },
];

const FAQ = () => {
  const title = {
    name: "자주 묻는 질문",
  };

  return (
    <div className="faq">
      <h3>{title.name}</h3>

      <ul>
        {nqs.map((q, i) => {
          return (
            <li>
              <button key={i}>
                {q.q}
                <FaPlus />
              </button>

              {q.a && (
                <div>
                  <p>{q.a}</p>
                  <a href="">ㄱㄳ</a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
