const mongoose = require('mongoose');
const {Schema} = mongoose;
const EntrenadorSchema = new Schema({
  apellido: {type: String, required: true},
  nombre: {type:String, required: true},
  dni: {type:String, required:true},
  nacimiento: {type:String, required:true},
  celular: {type:String, required:true},
  domiciolio: {type:String, required:true},
  email: {type:String, required:true}
})
module.exports = mongoose.models.Entrenador || mongoose.model('Entrenador', EntrenadorSchema);