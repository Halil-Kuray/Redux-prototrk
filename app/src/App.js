import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Counter count={count}/>
        <CounterActions count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
