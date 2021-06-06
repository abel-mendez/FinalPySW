const Pagocuota = require('../models/pagocuota');
const pagoCtrl = {}

//Alta de nuevo pago
pagoCtrl.createPago = async (req, res) => {
  var pago = new Pagocuota(req.body);
  try {
    await pago.save();
    res.json({
      'status': '1',
      'msg': 'Pago GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando el pago.'
    })
  }
}

//Recupera todos los pagos realizados
pagoCtrl.getAllPagos = async (req, res) => {
  var pagos = await Pagocuota.find();
  res.json(pagos);
}

module.exports = pagoCtrl;