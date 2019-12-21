const express = require("express");
const server = express();
const carsRouter = require("./routers/carRouter");

const port = 5000;
server.use(express.json());

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// exports.up = async function(knex) {
//     await knex.schema.createTable("cars", table => {
//       table.increments("Id");
//       table
//         .string("VIN", 17)
//         .notNull()
//         .unique();
//       table.text("Make").notNull();
//       table.text("Model").notNull();
//       table.integer("Mileage").notNull();
//       table.text("Transmission_Type");
//       table.text("Title_Status");
//     });
//   };

//   exports.down = async function(knex) {
//     await knex.schema.dropTableIfExists("cars");
//   };
