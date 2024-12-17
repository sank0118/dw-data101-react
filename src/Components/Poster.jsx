// import React from "react";
// import "./Poster.css";

// const Poster = () => {
//   return (
//     <div className="poster">
//       <h3>지금 뜨는 콘텐츠</h3>
//       <ul>
//         {imgs.map((img, i) => {
//           return (
//             <li key={i}>
//               <img src={img} alt="img2" />
//               <p>영화 제목</p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// export default Poster;

// const PosterItem = () => {
//   return (
//     <li>
//       <img src={""} alt="img2" />
//       <p>토르</p>
//     </li>
//   );
// };

// const img1 =
//   "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg";
// const img2 =
//   "https://cdn.pixabay.com/photo/2024/02/24/15/43/ai-generated-8594264_640.jpg";
// const img3 =
//   "https://cdn.pixabay.com/photo/2021/11/12/14/33/captain-america-6789190_640.jpg";

// const imgs = [img1, img2, img3];
import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h3>지금뜨는 컨텐츠</h3>
      <ul>
        {imgs.map((img, i) => {
          return (
            <li key={i}>
              <img src={img} alt="img1" />
              <p>영화제목</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Poster;
const img1 =
  "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg";
const img2 =
  "https://cdn.pixabay.com/photo/2024/02/24/15/43/ai-generated-8594264_640.jpg";
const img3 =
  "https://cdn.pixabay.com/photo/2021/11/12/14/33/captain-america-6789190_640.jpg";
const imgs = [img1, img2, img3];
