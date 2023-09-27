import React from "react";


export const useProxy = () =>{

    //get with URL params
    async function bringGetPr(inputvalue){
        try{
            const bringGet = await fetch("http://localhost:2000/getrow" + inputvalue);
            const bringGetAsJson = await bringGet.json();
            return bringGetAsJson;
        } catch (error) {
            console.log(error);
            return "Can't bring GET"
        }
    }

    //post with OBJECT
    async function bringPostPr(obj) {
        try{
            const response = await fetch("http://localhost:2000/postrow", {
            method: "POST",
            headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(obj)
        });

        const responseAsJson = response.json();
        return responseAsJson;
        } catch(error){
            console.log(error);
            return "Can't bring POST"
        }
       
    } 

    //put with URL params
    async function bringPutPr(obj, inputvalue){
        try{
            const response = await fetch("http://localhost:2000/putrow/" + inputvalue,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(obj)
            });
            const responseAsJson = response.json();
            return responseAsJson;
        }catch(error){
            console.log(error);
            return "Can't bring PUT"
        }
    }

    //delete with URL params
    async function bringDeletePr(inputvalue){
        try{
            const response = await fetch("http://localhost:2000/deleterow/" + inputvalue,
            {method: "DELETE"});
            const responseAsJson = response.json();
            return responseAsJson;
        } catch(error){
            console.log(error);
            return "Can't bring PUT";
        }
    }
    

    return {
        bringGetPr: bringGetPr,
        bringPostPr: bringPostPr,
        bringPutPr: bringPutPr,
        bringDeletePr: bringDeletePr
    }

}