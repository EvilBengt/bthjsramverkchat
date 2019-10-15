const express = require("express");

const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", function (socket) {
    console.info("User connected");

    socket.on("clientSentMessage", function (message) {
        io.emit("newMessage", message);
    });
});

server.listen(3000);
console.log("Listening on 3000");
