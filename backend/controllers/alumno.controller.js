const Alumno = require('../models/alumno');
const Asistencia = require('../models/asistencia');
const Progreso = require('../models/progreso');
const Rutina = require('../models/rutina');
const Ejercicio = require("../models/ejercicio");
const Pago = require("../models/pago");
const alumnoCtrl = {}

//Obtener todos los alumnos
alumnoCtrl.getAlumnos = async (req, res) => {
  var alumnos = await Alumno.find().populate("pagos").populate("plan");
  res.json(alumnos);
}

//Alta de alumno
alumnoCtrl.createAlumno = async (req, res) => {
  var alumno = new Alumno(req.body);
  try {
    await alumno.save();
    res.json({
      'status': '1',
      'msg': 'Alumno GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando alumno.'
    })
  }
}

//Baja de alumno
alumnoCtrl.deleteAlumno = async (req, res) => {
  try {
    await Alumno.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Alumno ELIMINADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando el alumno'
    })
  }
}


//Modificacion de alumno
alumnoCtrl.editAlumno = async (req, res) => {
    const vAlumno = new Alumno(req.body);
    try {
      await Alumno.updateOne({ _id: req.body._id }, vAlumno);
      res.json({
        'status': '1',
        'msg': 'Alumno ACTUALIZADO'
      })
    } catch (error) {
      res.json({
        'status': '0',
        'msg': 'Error actualizando el alumnos'
      })
    }
  }
  




//Alta de asistencia
alumnoCtrl.addAsistencia = async (req, res) => {
    const asistencia = new Asistencia(req.body);
    const alumno = await Alumno.findById(req.params.id);
    alumno.asistencias.push(asistencia);

    try{
      await asistencia.save();
        await Alumno.updateOne({_id: req.params.id}, alumno);
        res.json({
            'status': '1',
            'msg': 'Asistencia GUARDADA'
        })
    } catch(error){
        res.json({
            'status': '0',
            'msg': 'Error guardando la asistencia.'
          })
    }
}

//Baja de asistencia
alumnoCtrl.deleteAsistencia = async () => {
    const alumno = await Alumno.findById(req.params.id);
    const idasistencia = req.params.idasistencia;
    alumno.asistencias.pull(idasistencia);
    try{
        await Alumno.updateOne({_id: req.params.id}, alumno);
        res.json({
            'status': '1',
            'msg': 'Asistencia ELIMINADA'
        })
    } catch(error){
        res.json({
            'status': '0',
            'msg': 'Error eliminando la asistencia.'
          })
    }
}

//Alta de progreso
alumnoCtrl.addProgreso = async (req, res) => {
  const progreso = new Progreso(req.body);
  const alumno = await Alumno.findById(req.params.id);
  alumno.progresos.push(progreso);

  try{
      await Alumno.updateOne({_id: req.params.id}, alumno);
      res.json({
          'status': '1',
          'msg': 'Progreso GUARDADO'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error guardando el progreso del alumno.'
        })
  }
}

//Baja de progreso
alumnoCtrl.deleteProgreso = async () => {
  const alumno = await Alumno.findById(req.params.id);
  const idprogreso = req.params.idprogreso;
  alumno.progresos.pull(idprogreso);
  try{
      await Alumno.updateOne({_id: req.params.id}, alumno);
      res.json({
          'status': '1',
          'msg': 'Progreso ELIMINADO'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error eliminando el progreso.'
        })
  }
}


//Alta de rutina
alumnoCtrl.addRutina = async (req, res) => {
  const rutina = new Rutina(req.body);
  const alumno = await Alumno.findById(req.params.id);
  var rutinas = await Alumno.find().populate("plan");
  alumno.rutinas.push(rutina);

  try{
      await Alumno.updateOne({_id: req.params.id}, alumno);
      res.json({
          'status': '1',
          'msg': 'Rutina GUARDADA'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error guardando la rutina del alumno.'
        })
  }
}

//Baja de rutina
alumnoCtrl.deleteRutina = async () => {
  const alumno = await Alumno.findById(req.params.id);
  const idrutina = req.params.idrutina;
  alumno.rutinas.pull(idrutina);
  try{
      await Alumno.updateOne({_id: req.params.id}, alumno);
      res.json({
          'status': '1',
          'msg': 'Rutina ELIMINADA'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error eliminando la rutina.'
        })
  }
}




alumnoCtrl.addEjercicioToRutina = async (req, res) => {

  const ejercicio = new Ejercicio(req.body);
  const alumno = await Alumno.findById(req.params.id);
  var rutinas = alumno.rutinas;
  const rutina = await rutinas.find(r => r._id == req.params.idrutina);
  rutina.ejercicios.push(ejercicio);

  try{
      
      await Rutina.updateOne({_id: req.params.idrutina}, rutina);
      await Alumno.updateOne({_id: req.params.id}, alumno);
      res.json({
          'status': '1',
          'msg': 'Ejercicio GUARDADO'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error guardando el ejercicio.'
        })
      }

}


//Alta de pago
alumnoCtrl.addPago = async (req, res) => {
  const pago = new Pago(req.body);
  const alumno = await Alumno.findById(req.params.id);
  alumno.pagos.push(pago);

  try{
      await pago.save();
      await Alumno.updateOne({_id: req.params.id}, alumno);
      res.json({
          'status': '1',
          'msg': 'Pago GUARDADO'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error guardando el pago.'
        })
  }
}



//PARA ALUMNOS

//Obtener las rutinas de un alumno
alumnoCtrl.getRutinas = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  res.json(alumno.rutinas);
}


//Obtener las asistencias de un alumno
alumnoCtrl.getAsistencias = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  res.json(alumno.asistencias);
}

alumnoCtrl.getPagos = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  res.json(alumno.pagos);
}


module.exports = alumnoCtrl;