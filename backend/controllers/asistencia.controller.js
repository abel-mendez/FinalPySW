const Asistencia = require('../models/asistencia');
const asistenciaCtrl = {}

//Recupera todos los pagos realizados
asistenciaCtrl.getAllAsistencias = async (req, res) => {
  var asistencias = await Asistencia.find();
  res.json(asistencias);
}

//ESTADISTICAS
asistenciaCtrl.getAsistenciasPorFecha = async (req, res) => {
   var asistencias = await Asistencia.find().where("fecha").equals(req.params.fecha);
   res.json(asistencias);

}


module.exports = asistenciaCtrl;