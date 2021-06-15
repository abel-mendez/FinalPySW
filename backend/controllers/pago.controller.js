const Pago = require('../models/pago');
const pagoCtrl = {}

//Recupera todos los pagos realizados
pagoCtrl.getAllPagos = async (req, res) => {
  var pagos = await Pago.find();
  res.json(pagos);
}

//ESTADISTICAS
pagoCtrl.getPagosPorFecha = async (req, res) => {
   var pagos = await Pago.find().where("fechapago").equals(req.params.fechapago);
   res.json(pagos);

}



module.exports = pagoCtrl;