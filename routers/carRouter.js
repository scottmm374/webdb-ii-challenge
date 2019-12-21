const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars").select();
    res.json(cars);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const ids = await db("cars").insert(req.body);
    const newCar = await db("cars")
      .where({ id: ids[0] })
      .first();
    res.status(201).json(newCar);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = {
      VIN: req.body.VIN,
      Make: req.body.Make,
      Model: req.body.Model,
      Mileage: req.body.Mileage,
      Transmission_Type: req.body.Transmission_Type || null,
      Title_Status: req.body.Title_Status || null
    };
    await db("cars")
      .where("id", req.params.id)
      .update(payload);
    res.json(
      await db("cars")
        .where("id", req.params.id)
        .first()
    );
    // res.status(201).json(updateCar);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .del();
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
