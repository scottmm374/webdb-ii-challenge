const express = require("express");
const server = express();
const carsRouter = require("./routers/carRouter");

const port = 5000;
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.json({ Message: "Welcome to Cars DB" });
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
