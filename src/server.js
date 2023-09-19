const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/getrow/inputvalue", function(req, res){

    res.send({status: "get succeeded"})
});

app.post("/postrow", function(req, res){
    const message = req.body;
    console.log(req.body);
})

app.listen(2000, function(){
    console.log("Server started on port 2000");
})