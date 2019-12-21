const express = require("express");
const server = express();
const carsRouter = require("./routers/carRouter");

const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.json({ Message: "Welcome to Cars DB" });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ errorMessage: "Something went wrong" });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
