const db = require('./../data/db-config')

async function getPlants(){
    const plants = await db('users')
    return plants
}

async function getPlant(id){
const plant = await db("plants").where('plants_id', id)
return plant
}

async function insertPlanet(newPlant){
    const [plant_id] = await db('plants').insert(newPlant)
    return getPlant().where({plant_id}).first();
}

module.exports = {getPlant, getPlants, insertPlanet}