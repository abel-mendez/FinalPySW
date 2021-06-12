//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', alumnoCtrl.getAlumnos);
router.post('/', alumnoCtrl.createAlumno);
router.put('/:id', alumnoCtrl.editAlumno);
router.delete('/:id', alumnoCtrl.deleteAlumno);

router.post('/:id/asistencias', alumnoCtrl.addAsistencia);
router.delete('/:id/asistencias/:idasistencia', alumnoCtrl.deleteAsistencia);

router.post('/:id/rutinas', alumnoCtrl.addRutina);
router.delete('/:id/rutinas/:idrutina', alumnoCtrl.deleteRutina);

router.post('/:id/rutinas/:idrutina/ejercicio', alumnoCtrl.addEjercicioToRutina);

router.post('/:id/pagos', alumnoCtrl.addPago);



//PARA ALUMNOS
router.get('/:id/rutinas', alumnoCtrl.getRutinas);
router.get('/:id/asistencias', alumnoCtrl.getAsistencias);
router.get('/:id/pagos', alumnoCtrl.getPagos);

//exportamos el modulo de rutas
module.exports = router;