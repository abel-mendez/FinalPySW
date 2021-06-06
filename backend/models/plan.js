const mongoose = require('mongoose');
const Alumno = require('./alumno');
const {Schema} = mongoose;
const PlanSchema = new Schema({
  tipo: {type: String, required: true},
  lunes: {type: String, required: true},
  martes: {type: String, required: true},
  miercoles: {type: String, required: true},
  jueves: {type: String, required: true},
  viernes: {type: String, required: true},
  sabado: {type: String, required: true},
  //hay relacion de agregacion, me refieron con schema object id
  alumno: {type: Schema.Types.ObjectId, ref: Alumno, required: true}
})
module.exports = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);