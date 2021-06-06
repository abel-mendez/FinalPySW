const Rutinas = require('../models/rutina');
const rutinasCtrl = {}

//Creacion de rutina, envio informacion de los ejercicios en body como un objeto
rutinasCtrl.createRutina = async (req, res) => {
  var rutina = new Rutinas(req.body);
  try {
    await rutina.save();
    res.json({
      'status': '1',
      'msg': 'Rutina GUARDADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando rutina.'
    })
  }
}

//Recupera todas las rutinas (incluye ejercicios y sus detalles con populate)
rutinasCtrl.getAllRutinas = async (req, res) => {
  var rutinas = await Rutinas.find().populate('ejercicios');
  res.json(rutinas);
}

//Borra una rutina
rutinasCtrl.deleteRutina = async (req, res) => {
  try {
    await Rutinas.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Rutina ELIMINADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error eliminando la rutina'
    })
  }
}

//Modifica una rutina
rutinasCtrl.editRutina = async (req, res) => {
  const vrutina = new Rutinas(req.body);
  try {
    await Rutinas.updateOne({ _id: req.body._id }, vrutina);
    res.json({
      'status': '1',
      'msg': 'Rutina ACTUALIZADA'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error actualizando la rutina'
    })
  }
}

module.exports = rutinasCtrl;