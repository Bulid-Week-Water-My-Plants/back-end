const router = require('express').Router()

const Plant = require('./plants-model')
const restricted = require('./../restricted')


router.get("/", restricted, (req, res, next) => {
    Plant.getPlants()
    .then(plants =>{
        res.json(plants)
    })
    .catch(next)
})

router.get('/:plant_id:', restricted, (req,res,next)=>{
    Plant.getPlant(req.params.id)
    .then( plant => 
        res.json(plant))
    .catch(next)
})

router.post('/', restricted, (req, res, next) => {
    Plant.insertPlanet(req.body)
    .then( plant => {
        res.status(201).json(plant)
    })
    .catch(next)
})

router.delete('/:plant_id', restricted, (req, res, next) => {
    Plant.deletePlant(req.params.id)
    .then( count => {
        if(count > 0){
            res.status(204).end();
        } else {
            res.status(404).json({message: 'Record not found'})
        }
    })
    .catch(next)
})


router.put('/:plant_id', restricted, (req, res, next) => {
    Plant.updatePlant(req.params.id, req.body)
    .then(plant => {
        res.status(200).json(plant)
    })
    .catch(next)
})

module.exports = router;