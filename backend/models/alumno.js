const mongoose = require('mongoose');
const Pagocuota = require('./pagocuota');
const Rutina = require('./rutina');
const Asistencia = require('./asistencia');
const {Schema} = mongoose;
const AlumnoSchema = new Schema({
  apellido: {type: String, required: true},
  nombre: {type: String, required: true},
  dni: {type: Number, required: true},
  fechanac: {type: String, required: true},
  celular: {type: String, required: true},
  domicilio: {type: String, required: true},
  correoelectronico: {type: String, required: true},
  fechainicio: {type: String, required: true},
  //hay relacion de agregacion, me refieron con schema object id
  cuota: {type: Schema.Types.ObjectId, ref: Pagocuota, required: true},
  rutina: {type: Schema.Types.ObjectId, ref: Rutina, required: true},
  //hay relacion de composicion, me refiero con object schema
  asistencia: [{type: Asistencia.schema}]
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);