exports.up = async (knex) => {
  await knex.schema
    .createTable('plants', (plants) => {
      plants.increments('plant_id')
      plants.string('nickname', 200).notNullable()
      plants.string('species', 200).notNullable()
      plants.string('h2oFrequency', 200).notNullable()
      plants.string('image', 200).notNullable()
    })
    createTable('users', users => {
      users.increments();
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
    });
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('plant')

}
