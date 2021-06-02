const mongoose = require('mongoose');
const {Schema} = mongoose;
const RutinaSchema = new Schema({
  lunes: {type: String, required: true},
  martes: {type:String, required: true},
  miercoles: {type:String, required:true},
  jueves: {type:String, required:true},
  viernes: {type:String, required:true},
  sabado: {type:String, required:true},
})
module.exports = mongoose.models.Rutina || mongoose.model('Rutina', RutinaSchema);