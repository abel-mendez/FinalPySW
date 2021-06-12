const Alumno = require('../models/alumno');
const Asistencia = require('../models/asistencia');
const Progreso = require('../models/progreso');
const Rutina = require('../models/rutina');
const alumnoCtrl = {}

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

module.exports = alumnoCtrl;