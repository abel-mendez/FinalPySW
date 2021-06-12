const mongoose = require('mongoose');
const Pagocuota = require('./pagocuota');
const Rutina = require('./rutina');
const Asistencia = require('./asistencia');
const Progreso = require('./progreso');
const Plan = require('./plan');
const {Schema} = mongoose;
const AlumnoSchema = new Schema({
  apellido: {type: String, required: true},
  nombre: {type: String, required: true},
  dni: {type: Number, required: true},
  fechanac: {type: String, required: true},
  fechainicio: {type: String, required: true},
  celular: {type: String, required: true},
  domicilio: {type: String, required: true},
  correoelectronico: {type: String, required: true},
  //hay relacion de agregacion, me refieron con schema object id
  pagoscuotas: [{type: Schema.Types.ObjectId, ref: Pagocuota, required: true}],
  plan: {type: Schema.Types.ObjectId, ref: Plan, required: true},
  //hay relacion de composicion, me refiero con object schema
  asistencias: [{type: Asistencia.schema}],
  progresos: [{type: Progreso.schema}],
  rutinas: [{type: Rutina.schema}]
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);