//defino controlador para el manejo de CRUD
const sliderCtrl = require('./../controllers/slider.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno
router.get('/', sliderCtrl.getSliders);
router.get('/:id', sliderCtrl.getSlider);
router.post('/', sliderCtrl.addSlider);
router.delete('/:id', sliderCtrl.deleteSlider);
router.put('/:id', sliderCtrl.editSlider);

//exportamos el modulo de rutas
module.exports = router;