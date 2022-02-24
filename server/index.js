const app = require("express")();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 3000;

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connection made successfully");
  socket.on("message", (payload) => {
    console.log("Message received on server: ", payload);
    setInterval(() => io.emit( io.emit("message", payload)), 1000);
    // io.emit("message", payload);
  });
});



server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
