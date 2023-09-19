import React from "react";


export const useProxy = () =>{

    async function bringGetPr(){
        try{
            const bringGet = await fetch("http://localhost:2000/getrow");
            const bringGetAsArray = await bringGet.json();
            return bringGetAsArray;
        } catch (error) {
            console.log(error);
            return "Can't bring GET"
        }
    }

    async function bringPostPr(newInfo) {
        const response = await fetch("http://localhost:2000/postrow", {
            method: "POST",
            headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(newInfo)
        });

        const openResponse = await response.json();
        return openResponse;
    }

    return {
        bringGetPr: bringGetPr,
        bringPostPr: bringPostPr
    }

}