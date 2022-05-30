const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://orbital:orbital@cluster0.b5il0.mongodb.net/modules")

// require route
app.use("/", require("./routes/moduleRoute"));

app.listen(3001, function() {
    console.log("connect");
})