import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Langbtn from "./layout/Langbtn";
import Gallery from "./Compnonts/Gallery";
import Auth from "./Compnonts/Auth";

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
