const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProgresoSchema = new Schema({
  fecha: {type: String, required: true},
  peso: {type: Number, required: true},
  foto: {type: String, required: true}
})
module.exports = mongoose.models.Progreso || mongoose.model('Progreso', ProgresoSchema);