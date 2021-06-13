const Pago = require('../models/pago');
const Alumno = require('../models/alumno');
const pagoCtrl = {}

//Alta de nuevo pago, NO IRÍA, se hace desde el alumno
// pagoCtrl.createPago = async (req, res) => {
//   var pago = new Pago(req.body);
//   try {
//     await pago.save();
//     res.json({
//       'status': '1',
//       'msg': 'Pago GUARDADO'
//     })
//   } catch (error) {
//     res.json({
//       'status': '0',
//       'msg': 'Error guardando el pago.'
//     })
//   }
// }

//Recupera todos los pagos realizados
pagoCtrl.getAllPagos = async (req, res) => {
  var pagos = await Pago.find();
  res.json(pagos);
}

pagoCtrl.getPagosPorFecha = async (req, res) => {
  //trae pagos sin referencia al alumno
  //  var pagos = await Pago.find().where("fechapago").equals(req.params.fechapago);
  //  res.json(pagos);

  // var alumnos = await Alumno.find()

  // var definitivos;
  // pagos.forEach(function(pago) {definitivo = alumnos.find(a => a.pagos.find(p => p._id == pago));});
  // console.log(definitivo);

  
  // res.json(definitivos);
  

}



module.exports = pagoCtrl;