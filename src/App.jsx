import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Langbtn from "./layout/Langbtn";
import Gallery from "./Components/Gallery";
import Auth from "./Components/Auth";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
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
