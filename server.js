const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Simple Node App")
});

const port = process.env.PORT || 3000;
app.listen(8081, () => {
    console.log("Simple Node App is listening");
})