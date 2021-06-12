const Rutina = require('../models/rutina');
const Ejercicio = require('../models/ejercicios');
const rutinasCtrl = {}

//Creacion de rutina, envio informacion de los ejercicios en body como un objeto
rutinaCtrl.createRutina = async (req, res) => {
  var rutina = new Rutina(req.body);
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
rutinaCtrl.getAllRutinas = async (req, res) => {
  var rutinas = await Rutina.find().populate('ejercicios');
  res.json(rutinas);
}

//Borra una rutina
rutinaCtrl.deleteRutina = async (req, res) => {
  try {
    await Rutina.deleteOne({ _id: req.params.id });
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
rutinaCtrl.editRutina = async (req, res) => {
  const vrutina = new Rutina(req.body);
  try {
    await Rutina.updateOne({ _id: req.body._id }, vrutina);
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

//Alta de ejercicios
rutinaCtrl.addEjercicio = async (req, res) => {
  const ejercicio = new Ejercicio(req.body);
  const rutina = await Rutina.findById(req.params.id);
  rutina.ejercicios.push(ejercicio);

  try{
      await Rutina.updateOne({_id: req.params.id}, rutina);
      res.json({
          'status': '1',
          'msg': 'Ejercicio GUARDADO'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error guardando el ejercicio de rutina.'
        })
  }
}

//Baja de asistencia
rutinaCtrl.deleteEjercicio = async () => {
  const rutina = await Rutina.findById(req.params.id);
  const idejercicio = req.params.idejercicio;
  rutina.ejercicios.pull(idejercicio)

  try{
      await Rutina.updateOne({_id: req.params.id}, rutina);
      res.json({
          'status': '1',
          'msg': 'Ejercicio ELIMINADO'
      })
  } catch(error){
      res.json({
          'status': '0',
          'msg': 'Error eliminando el ejercicio de rutina.'
        })
  }
}

module.exports = rutinasCtrl;