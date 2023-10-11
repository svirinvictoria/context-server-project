import React from "react";

export const useProxy = () => {
  //get with URL params
  async function bringGetPr(param) {
    try {
      const bringGet = await fetch("http://localhost:2000/getrow/" + param);
      const bringGetAsJson = await bringGet.json();
      return bringGetAsJson;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //post with OBJECT
  async function bringPostPr(obj) {
    try {
      const response = await fetch("http://localhost:2000/postrow", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const responseAsJson = response.json();
      return responseAsJson;
    } catch (error) {
      console.log(error);//type error- failed to fetch!!!!!!!!!!
      return null;
    }
  }

  //put with URL params
  async function bringPutPr(obj, param) {
    try {
      const response = await fetch(
        "http://localhost:2000/putrow/" + param,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const responseAsJson = response.json();
      return responseAsJson;
    } catch (error) {
      console.log(error);//TypeError: Failed to fetch!!!!!!!!!!!!!!!!!
      return null;
    }
  }

  //delete with URL params
  async function bringDeletePr(param) {
    try {
      const response = await fetch(
        "http://localhost:2000/deleterow/" + param,
        { method: "DELETE" }
      );
      const responseAsJson = response.json();
      return responseAsJson;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return {
    bringGetPr: bringGetPr,
    bringPostPr: bringPostPr,
    bringPutPr: bringPutPr,
    bringDeletePr: bringDeletePr,
  };
};
