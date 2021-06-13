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

router.get('/:dni', alumnoCtrl.getAlumnoPorDNI);
router.get('/fechainicio/:fechainicio', alumnoCtrl.getAlumnoPorFechaInicio);
router.get('/plan/:plan', alumnoCtrl.getAlumnoPorPlan)

router.post('/:id/asistencias', alumnoCtrl.addAsistencia);
router.delete('/:id/asistencias/:idasistencia', alumnoCtrl.deleteAsistencia);


router.post('/:id/rutinas', alumnoCtrl.addRutina);
router.delete('/:id/rutinas/:idrutina', alumnoCtrl.deleteRutina);
router.put('/:id/rutinas/:idrutina', alumnoCtrl.editRutina);
//router.put('/rutinas/:idrutina', alumnoCtrl.editRutina);

router.post('/:id/rutinas/:idrutina/ejercicios', alumnoCtrl.addEjercicioToRutina);

router.post('/:id/pagos', alumnoCtrl.addPago);

router.post('/:id/progresos', alumnoCtrl.addProgreso);

//PARA ALUMNOS
router.get('/:id/rutinas', alumnoCtrl.getRutinas);
router.get('/:id/asistencias', alumnoCtrl.getAsistencias);
router.get('/:id/pagos', alumnoCtrl.getPagos);

//exportamos el modulo de rutas
module.exports = router;