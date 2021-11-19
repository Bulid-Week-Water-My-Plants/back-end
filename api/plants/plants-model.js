const db = require('../../data/db-config')

async function getPlants(){
    const plants = await db('plants')
    return plants
}

async function getPlant(id){
const plant = await db('plants').where('plant_id', id).select('nickname','h2oFrequency','species', 'image')
return plant
}

async function insertPlanet(newPlant){
    const newRecords = await db('plants')
      .insert(newPlant)
      .returning(["plant_id"])
//     const plant_id = newRecords[0].plant_id
//     return getPlant()
//       .where({plant_id})
//       .first();
 }

function deletePlant(plant_id){
    return db('plants').where({plant_id}).del()
}

async function updatePlant(plant_id, changes){
    return db('plants').where({plant_id}).update(changes,'*')
}

module.exports = {getPlant, getPlants, insertPlanet, deletePlant, updatePlant}