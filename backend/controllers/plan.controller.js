const Plan = require('../models/plan');
const planCtrl = {}

//Obtener todos los planes
planCtrl.getPlanes = async (req, res) => {
  var planes = await Plan.find();
  res.json(planes);
}

//Obtener id de plan por tipo
//FUNCIONA EN CONJUNTO CON GET ALUMNO POR PLAN DE ALUMNO CONTROLLER PARA OBTENER ALUMNOS POR PLAN
planCtrl.getIDporTipo = async (req, res) => {
  var plan = await Plan.find().where("tipo").equals(req.params.tipo);
  res.json(plan);
}

//Alta de plan
planCtrl.createPlan = async (req, res) => {
  var plan = new Plan(req.body);
  try {
    await plan.save();
    res.json({
      'status': '1',
      'msg': 'Plan GUARDADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando plan.'
    })
  }
}


module.exports = planCtrl;