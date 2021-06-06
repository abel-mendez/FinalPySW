//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.post('/', alumnoCtrl.createAlumno);
router.put('/:id', alumnoCtrl.editAlumno);
router.delete('/:id', alumnoCtrl.deleteAlumno);
router.post('/:id/asistencia', alumnoCtrl.addAsistencia);
router.delete('/:id/asistencia/:idasistencia', alumnoCtrl.deleteAsistencia);
//exportamos el modulo de rutas
module.exports = router;