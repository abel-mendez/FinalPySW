const Plan = require('../models/plan');
const planCtrl = {}

//Obtener todos los planes
planCtrl.getPlanes = async (req, res) => {
  var planes = await Plan.find();
  res.json(planes);
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