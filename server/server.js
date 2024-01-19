const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routes/userRoute");
const chatRouter = require("./Routes/chatRoute");
const messageRouter = require("./Routes/messageRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/chats", chatRouter);
app.use("/api/messages", messageRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Chat app API");
});

const port = process.env.PORT || 3000;
const URL =
    process.env.ATLAS_URL 

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});

mongoose
    .connect(URL)
    .then(() => {
        console.log("MongoDb is established");
    })
    .catch((err) => {
        console.log("MongoDb connection failed", err.message);
    });
