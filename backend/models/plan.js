const mongoose = require('mongoose');
const Alumno = require('./alumno');
const {Schema} = mongoose;
const PlanSchema = new Schema({
  tipo: {type: String, required: true},
  lunes: {type: Boolean, required: true},
  martes: {type: Boolean, required: true},
  miercoles: {type: Boolean, required: true},
  jueves: {type: Boolean, required: true},
  viernes: {type: Boolean, required: true},
  sabado: {type: Boolean, required: true},
  //hay relacion de agregacion, me refieron con schema object id
  //alumno: {type: Schema.Types.ObjectId, ref: Alumno, required: true}
})
module.exports = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);