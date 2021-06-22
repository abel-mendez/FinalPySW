//defino controlador para el manejo de CRUD
const asistenciaCtrl = require('./../controllers/asistencia.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', asistenciaCtrl.getAllAsistencias);
router.get('/:fecha', asistenciaCtrl.getAsistenciasPorFecha)
router.get('/asistencias/:idasistencia', asistenciaCtrl.getAsistencia);
router.put('/asistencias/:idasistencia', asistenciaCtrl.editAsistencia);
router.delete('/:idasistencia', asistenciaCtrl.deleteAsistencia);

//exportamos el modulo de rutas
module.exports = router;