const mongoose = require('mongoose');
const alumno = require('./alumno');
const {Schema} = mongoose;
const UsuarioSchema = new Schema({
  usuario: {type: number, required: true},
  password: {type:String, required: true},
  nombres: {type:String, required:true},
  apellido: {type:String, required:true},
  perfil: {type:String, required: true} 
  //alumno: {type:Schema.Types.ObjectId,ref: alumno, requiere:true },
})
module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);