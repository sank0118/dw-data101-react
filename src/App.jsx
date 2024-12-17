import React from "react";
import Header from "./layout/Header";
import Langbtn from "./layout/Langbtn";
import Gallery from "./Components/Gallery";
import Ninput from "./Components/sample/Ninput";
import Detail from "./Components/Detail";
import Footer from "./layout/Footer";
import Poster from "./Components/Poster";
import Reason from "./Components/Reason";
import FAQ from "./Components/FAQ";
import LB from "./Components/LB";
// import MQ from "./ex/MQ";
// import GRID from "./ex/GRID";
// import CAL from "./ex/CAL";
// import { name } from "./db";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <Ninput />
        <Detail />
        <Poster />
        <Poster />
        <Reason />
        <FAQ />
        <LB />
      </main>
      <Footer />
      {/* <MQ /> */}
      {/* <GRID /> */}
      {/* <CAL /> */}
    </>
  );
};

export default App;

// import React from "react";
// import Sampleheader from "./layout/Sampleheader";
// import Gallery from "./Components/Gallery";

// const App = () => {
//   return (
//     <>
//       <Sampleheader />
//       <main>
//         <h1>App</h1>
//         <Gallery />
//       </main>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   //변하는 수

//   //글자 형태 = 문자 = 스트링
//   // string;
//   const string = "Hello world!";
//   // 'string', 'backtic'
//   const sample = "I say , ${string}";
//   console.log(sample);
//   // 숫자 = number
//   const number = 12;

//   // 참거짓
//   const bool = true;
//   // false
//   const isksgood = true;
//   console.log(isksgood);

//   // 조건문
//   function talk() {
//     if (isksgood) {
//       console.log("Hello");
//     }
//     console.log("Hi");
//   }
//   talk();

//   // 배열 ARRAY
//   // const dates = [1, 2, 3];
//   // const newArr = [dates, person];

//   // usestate
//   // const [name, setName] = useState(ks);

//   // 객체 object
//   // const person = {
//   //   name: "ks",
//   //   tel: null,
//   // };
//   // const rn1 = null;
//   // const rn2 = undefind;

//   // console.log(person.tel);

//   // console.log(newarr);
//   console.log();

//   let name1 = "ks";

//   return (
//     <div>
//       <input type="text" value={name1} id="name" />
//     </div>
//   );
// };

// export default App;
