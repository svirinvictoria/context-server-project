import React, { useState } from "react";
import { useProxy } from "./useProxy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [getUrl, setGetUrl] = useState("XXX");
  const [post, setPost] = useState("YYY");
  const [put, setPut] = useState("ZZZ");
  const [deleteUrl, setDeleteUrl] = useState("QQQ");

  const proxy = useProxy;

  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
  };
  console.log("input value as state", inputValue);

  const clickButtonHandler = (event) => {};

  //get
  async function getUrlHandler(inputValue) {
    const getUrl = await proxy.bringGetPr(inputValue);
    console.log("get", getUrl);
    setGetUrl(getUrl.status);
  }

  //post
  async function postHandler() {
    const obj = {
      name: inputValue,
      status: "created",
    };
    const createObj = await proxy.bringPostPr(obj);
    setPost(createObj.name);
  }

  //put
  async function putHandler() {
    const obj = {
      name: inputValue,
      status: "updated",
    };

    const updateObj = await proxy.bringPutPr(obj, inputValue);
    setPut(updateObj.name);
  }

  //delete
  async function deleteHandler() {
    const deleteUrl = await proxy.bringDeletePr(20);
    setDeleteUrl(deleteUrl.name);
  }

  return (
    <div className="outer-box">
      <Header />
      <div className="inner-box">
        <select className="slct-style">
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <button
          type="button"
          className="btn-style"
          onClick={clickButtonHandler}
        >
          Go!
        </button>

        <input
          value={inputValue}
          type="text"
          className="inp-style"
          onChange={changeInputHandler}
        ></input>
      </div>
      <Footer />
    </div>
  );
}

export default App;
