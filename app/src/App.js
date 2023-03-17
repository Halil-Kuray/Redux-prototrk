import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import React, { useState } from "react";

function App() {

  return (
    <div>
        <Counter />
        <CounterActions />
    </div>
  );
}

export default App;
