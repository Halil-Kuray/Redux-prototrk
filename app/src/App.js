import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {

  return (
    <div>
        <Header/>
        <Counter />
        <CounterActions />
        <Footer/>
    </div>
  );
}

export default App;
