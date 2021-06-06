const mongoose = require('mongoose');
const Ejercicios = require('./ejercicios');
const {Schema} = mongoose;
const RutinaSchema = new Schema({
  tipo: {type: String, required: true},
  duracion: {type: String, required: true},
  vigente: {type: Boolean, required:true},
  //hay relacion de composicion, me refiero con object schema
  ejercicios: [{type: Ejercicios.schema}]
})
module.exports = mongoose.models.Rutina || mongoose.model('Rutina', RutinaSchema);