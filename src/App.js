import React, { useState } from "react";
import { useProxy } from "./useProxy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("input value   ");
  const [selectValue, setSelectValue] = useState("");
  const [getUrl, setGetUrl] = useState("");
  const [post, setPost] = useState("");
  const [put, setPut] = useState("");
  const [deleteUrl, setDeleteUrl] = useState("");

  const proxy = useProxy();

  //finding value of input field
  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
  };
  
 // console.log("input value as state", inputValue);

  //get
  async function getUrlHandler(param) {
    console.log("GET is called");
    const getUrl = await proxy.bringGetPr(param);
    console.log("get", getUrl);
    setGetUrl(getUrl.status);
  }
  //  //post
  async function postHandler() {
    console.log("POST is called");
    const obj = {
      name: inputValue,
      status: "created",
    };
    const createObj = await proxy.bringPostPr(obj);
    setPost(createObj.status);
  }
  // //put
  async function putHandler() {
    console.log("PUT is called");
    const obj = {
      name: inputValue,
      status: "updated",
    };
    const updateObj = await proxy.bringPutPr(obj, inputValue);
    setPut(updateObj.status);
  }

  // //delete
  async function deleteHandler() {
    console.log("DELETE is called");
    const deleteUrl = await proxy.bringDeletePr(20);
    setDeleteUrl(deleteUrl.status);
  }

  //button
  const clickButtonHandler = (event) => {
    //console.log("value in select:", selectValue);
    if (selectValue === "get") {
      getUrlHandler(inputValue);
    } else if (selectValue === "post") {
      postHandler();
    } else if (selectValue === "put") {
      putHandler();
    } else {
      deleteHandler();
    }
  };
 

  //selecting message for header and footer
  const selectMessage = () => {
    let message;
    if (selectValue === "get") {
      message = getUrl;
    } else if (selectValue === "post") {
      message = post;
    } else if (selectValue === "put") {
      message = put;
    } else {
      message = deleteUrl;
    }

    return message;
  };

  return (
    <div className="outer-box">
      <Header selectMessage={selectMessage()} inputValue={inputValue}/>
      <div className="inner-box">
        <select
          className="slct-style"
          onChange={(event) => {
            setSelectValue(event.target.value);
          }}
          defaultValue={selectValue}
        >
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
          placeholder="Insert name"
        ></input>
      </div>
      <Footer selectMessage={selectMessage()} inputValue={inputValue}/>
    </div>
  );
}

export default App;
