
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name').notNullable().unique()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name').notNullable().unique()
        table.string('unit')
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('step_instructions').notNullable()
        table.integer('recipe_id').notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingred_id')
        table.float('quantity').notNullable()
        table.integer('step_id').notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('ingredient_id').notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};


exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
