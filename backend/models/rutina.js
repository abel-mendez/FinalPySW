const mongoose = require('mongoose');
const Ejercicios = require('./ejercicio');
const {Schema} = mongoose;
const RutinaSchema = new Schema({
  grupomuscular: {type: String, required: true},
  duracion: {type: String, required: true},
  dia: {type: Number, required:true},
  //hay relacion de composicion, me refiero con object schema
  ejercicios: [{type: Ejercicios.schema}]
})
module.exports = mongoose.models.Rutina || mongoose.model('Rutina', RutinaSchema);