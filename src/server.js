const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

//get listener with URL params
app.get("/getrow/:inputvalue", function (req, res) {
  //on the client's side: http://localhost:2000/getrow/vika
  const getParam = req.params.inputvalue;
  console.log("getParam", getParam);
  res.send({name: "get", status: "GET succeeded" });
});

//post listener with an object
app.post("/postrow", function (req, res) {
  //on the client's side we're sending a post request with an object
  //{ "name": "Vika",
  //    "status": "created"
  //}
  const postBody = req.body;
  console.log("postBody", postBody);
  res.send({ name: "post", status: "POST succeeded" });
});


//put listener with URL params
app.put("/putrow/:inputvalue", function(req, res){

    //on the customer side: http://localhost:2000/putrow/vika
    //sending PUT request with the following object (this object is called OBJ on the server side):
    //{
    //     "name": "Vika",
    //     "status": "updated"
    //}

    const putName = req.params.name;
    const putBody = req.body;

    console.log("putName", putName);
    console.log("putBody", putBody);

    res.send({name: "put", status: "PUT succeeded"})
})

//DELETE listener with URL params
app.delete("/deleterow/:inputvalue", function(req, res){
    //on the server side: http://localhost:2000/deleterow/vika
    const deleteParam = req.params.inputvalue;
    console.log("deleteParam", deleteParam);
    res.send({name: "delete", status: "DELETE succeeded"})
})

app.listen(2000, function () {
  console.log("Server started on port 2000");
});
