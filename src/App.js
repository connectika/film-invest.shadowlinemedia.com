import React from "react";
import Head from "./components/Head";
import Middle from "./components/Middle";
import Tail from "./components/Tail";

function App() {
  return (
    <div className="App">
       <Head />
       <Middle />
       <Tail />
       {/* "build": "react-scripts build", */}
    </div>
  );
}

export default App;
