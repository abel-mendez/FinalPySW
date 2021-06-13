//defino controlador para el manejo de CRUD
const planCtrl = require('./../controllers/plan.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', planCtrl.getPlanes);
router.post('/', planCtrl.createPlan);
router.get('/:tipo', planCtrl.getIDporTipo);

//exportamos el modulo de rutas
module.exports = router;