//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de alumno

router.get('/', alumnoCtrl.getAlumnos);
router.get('/:id', alumnoCtrl.getAlumno);
router.post('/', alumnoCtrl.createAlumno);
router.put('/:id', alumnoCtrl.editAlumno);
router.delete('/:id', alumnoCtrl.deleteAlumno);

//PARA CREAR USUARIO
router.post('/:id/usuario', alumnoCtrl.createUsuario);
//router.put('/usuario/:id/editaruser', alumnoCtrl.editUsuario);
router.put('/:id/usuario/:idusuario', alumnoCtrl.editUsuario);
router.get('/buscar/:id', alumnoCtrl.getUsuarioPorAlumno);

router.post('/:id/asistencias', alumnoCtrl.addAsistencia);

router.post('/:id/rutinas', alumnoCtrl.addRutina);
router.get('/:id/rutinas/:idrutina', alumnoCtrl.getRutina);
router.delete('/:id/rutinas/:idrutina', alumnoCtrl.deleteRutina);
router.put('/:id/rutinas/:idrutina', alumnoCtrl.editRutina);

router.post('/:id/rutinas/:idrutina/ejercicios', alumnoCtrl.addEjercicioToRutina);
router.get('/:id/rutinas/:idrutina/ejercicios', alumnoCtrl.getEjercicios);
router.get('/:id/rutinas/:idrutina/ejercicios/:idejercicio', alumnoCtrl.getEjercicio);
router.put('/:id/rutinas/:idrutina/ejercicios/:idejercicio', alumnoCtrl.editEjercicio);
router.delete('/:id/rutinas/:idrutina/ejercicios/:idejercicio', alumnoCtrl.deleteEjercicio);

router.post('/:id/pagos', alumnoCtrl.addPago);

router.post('/:id/progresos', alumnoCtrl.addProgreso);
router.get('/:id/progresos/:idprogreso', alumnoCtrl.getProgreso);
router.delete('/:id/progresos/:idprogreso', alumnoCtrl.deleteProgreso);
router.put('/:id/progresos/:idprogreso', alumnoCtrl.editProgreso);

//ESTADISTICAS
router.get('/dni/:dni', alumnoCtrl.getAlumnoPorDNI);
router.get('/fechainicio/:fechainicio', alumnoCtrl.getAlumnosPorFechaInicio);
router.get('/plan/:plan', alumnoCtrl.getAlumnoPorPlan)

//PARA ALUMNOS
router.get('/:id/rutinas', alumnoCtrl.getRutinas);
router.get('/:id/asistencias', alumnoCtrl.getAsistencias);
router.get('/:id/pagos', alumnoCtrl.getPagos);
router.get('/:id/progresos', alumnoCtrl.getProgresos);
router.get('/usuario/:usuario', alumnoCtrl.getAlumnoPorUsuario);

//exportamos el modulo de rutas
module.exports = router;