import React from "react";
import Head from "./components/Head";
import Middle from "./components/Middle";
import Tail from "./components/Tail";
import '../src/components/page.css'

function App() {
  return (
    <div className="App">
       <Head />
       <Middle />
       <Tail />
    </div>
  );
}

export default App;
