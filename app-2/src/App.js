import Test from "./components/Test";
import { useState } from "react";


function App() {

  const [ show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(prevState => !prevState)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <Test/>}
    </div>
  );
}

export default App;
