import React from "react";
import Cta from "../components/Cta";
import About from "../components/About";

function Home() {
  return (
    <>
      <h1 className="font-bold underline text-primary">Hello world!</h1>
      {/* Example customize color*/}
      <About />
      <Cta />
    </>
  );
}

export default Home;
