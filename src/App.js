import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');

  const changeInputHandler=()=>{}
  const clickButtonHandler =(event)=>{}

  return (
    <div className="outer-box">
      <Header />
      <div className="inner-box">
        <select>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <button type="button" className="btn-style" onClick={clickButtonHandler}>
          Go!
        </button>
     
      <input value={inputValue} type="text" className="" onChange={changeInputHandler}></input>
      </div>
      <Footer />
    </div>
  );
}

export default App;
