const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res)=>{
    res.json({message : "Wecome to contact book application."});
});

module.exports = app;