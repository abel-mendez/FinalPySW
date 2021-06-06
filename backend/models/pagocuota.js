const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagocuotaSchema = new Schema({
  monto: {type: Number, required: true},
  fecha: {type: String, required: true},
  estado: {type: String, required: true}, //vigente,vencido
  modo_de_pago: {type: String, required:true}
})
module.exports = mongoose.models.Pagocuota || mongoose.model('Pagocuota', PagocuotaSchema);