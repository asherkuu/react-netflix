const express = require("express");
const cors = require("cors");

const app = express();
// app.use(express.json());

const port = process.env.PORT || 9000;
app.use(cors()); // Cross Origin Resource Sharing

app.get("/", (req, res) => {
    console.log(`Wellcome to dpg-server..`);
});

app.get("/api/data", (req, res) => {
    const json = { result: "true" };
    res.json(json);
});

app.get("/", (req, res) => {
    console.log("Welcome to Mern-Stack");
});

// listen
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
