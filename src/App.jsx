import React from "react";
import Header from "./layout/Header";
import Langbtn from "./layout/Langbtn";
import Gallery from "./Components/Gallery";
import Auth from "./Components/Auth";
import Ninput from "./Components/sample/Ninput";
import Detail from "./Components/Detail";
import Footer from "./layout/Footer";
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
