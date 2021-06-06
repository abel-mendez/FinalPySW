const mongoose = require('mongoose');
const cuota = require('./cuota');
const {Schema} = mongoose;
const AlumnoSchema = new Schema({
  apellido: {type: String, required: true},
  nombre: {type:String, required: true},
  dni: {type:String, required:true},
  nacimiento: {type:String, required:true},
  celular: {type:String, required:true},
  domiciolio: {type:String, required:true},
  email: {type:String, required:true},
  inicio: {type:String, required:true},
  plan: {type:String, required:true},
  //cuota: {type:Schema.Types.ObjectId,ref: cuota, requiere:true },
  //rutina
  // 
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);