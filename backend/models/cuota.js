const mongoose = require('mongoose');
const alumno = require('./alumno');
const {Schema} = mongoose;
const CuotaSchema = new Schema({
  monto: {type: number, required: true},
  fecha: {type:String, required: true},
  estado: {type:String, required:true},//vigente,vencido
  modo_de_pago: {type:String, required:true},
  alumno: {type:Schema.Types.ObjectId,ref: alumno, requiere:true },
})
module.exports = mongoose.models.Cuota || mongoose.model('Cuota', CuotaSchema);