exports.up = async function(knex) {
  await knex.schema.createTable("cars", table => {
    table.increments("Id");
    table
      .string("VIN", 17)
      .notNull()
      .unique();
    table.text("Make").notNull();
    table.text("Model").notNull();
    table.integer("Mileage").notNull();
    table.text("Transmission_Type");
    table.text("Title_Status");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
