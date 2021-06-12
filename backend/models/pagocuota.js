const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagocuotaSchema = new Schema({
  monto: {type: Number, required: true},
  modopago: {type: String, required:true},
  fechapago: {type: String, required: true},
  //fechavencimiento: {type: String, required: true},
  pagado: {type: Boolean, required: true}
})
module.exports = mongoose.models.Pagocuota || mongoose.model('Pagocuota', PagocuotaSchema);