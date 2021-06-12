const mongoose = require('mongoose');
const {Schema} = mongoose;
const EjerciciosSchema = new Schema({
  nombre: {type: String, required: true},
  series: {type: Number, required: true},
  repeticiones: {type: Number, required:true}
})
module.exports = mongoose.models.Ejercicios || mongoose.model('Ejercicios', EjerciciosSchema);