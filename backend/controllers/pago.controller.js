const Pago = require('../models/pago');
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

pagoCtrl.getPagoPorFecha = async (req, res) => {
  const pago = await Pago.find().where("fechapago").equals(req.params.fechapago);
  res.json(pago);
}

module.exports = pagoCtrl;