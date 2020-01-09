exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();

  // Inserts seed entries
  await knex("cars").insert([
    {
      VIN: "123456SDH123DHF14",
      Make: "Ford",
      Model: "Mustang",
      Mileage: 20125,
      Transmission_Type: "Manual",
      Title_Status: "salvage"
    },
    {
      VIN: "234567SDG4512YH78",
      Make: "Jeep",
      Model: "Wrangler",
      Mileage: 3015
    },
    {
      VIN: "T34567SDG4512YH78",
      Make: "Honda",
      Model: "Odyssey",
      Mileage: 200159
    }
  ]);
};
