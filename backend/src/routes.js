const express = require('express')

const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

const routes = express.Router()


//Session
routes.post('/login',SessionController.create)

//ONGs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//Incidents
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

//Profile
routes.get('/profile', ProfileController.index)


module.exports = routes