const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars").select();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateId, async (req, res, next) => {
  try {
    const cars = await db("cars")
      .where("id", req.params.id)
      .select();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const ids = await db("cars").insert(req.body);
    const newCar = await db("cars")
      .where({ id: ids[0] })
      .first();
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", validateId, async (req, res, next) => {
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
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", validateId, async (req, res, next) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .del();
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

// Middleware
async function validateId(req, res, next) {
  try {
    const cars = await db("cars")
      .where("id", req.params.id)
      .first();
    if (cars) {
      next();
    } else {
      res.status(404).json({ message: "Id not found" });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = router;
