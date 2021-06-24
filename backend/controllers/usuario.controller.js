const alumno = require('../models/alumno');
const Usuario = require('../models/usuario')
const usuarioCtrl = {}

//Create Usuario
usuarioCtrl.createUsuario = async (req, res) => {
  var usuario = new Usuario(req.body);
  try {
    await usuario.save();
    res.json({
      'status': '1',
      'msg': 'Usuario AGREGADO'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error guardando Usuario.'
    })
  }
}

//Pregunta si ya existe el nombre de usuario
usuarioCtrl.getUsuario = async (req, res) => {
  var usuarios = await Usuario.find({usuario : req.body.usuario});
  if (usuarios != ""){ 
    existe = true;
  }else
  {
    existe = false;
  }
  

  
  res.json(existe);
}

usuarioCtrl.loginUsuario = async (req, res) => {
  //en req.body se espera que vengan las credenciales de login
  //defino los criterios de busqueda en base al username y password recibidos
  const criteria = {
    usuario: req.body.username,
    password: req.body.password
  }
  //el método findOne retorna un objeto que cumpla con los criterios de busqueda
  Usuario.findOne(criteria, function (err, user) {
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    if (err) {
      res.json({
        status: 0,
        msg: 'error'
      })
    };
    if (!user) {
      res.json({
        status: 0,
        msg: "not found"
      })
    } else {
      res.json({
        status: 1,
        msg: "success",
        usuario: user.usuario,
        perfil: user.perfil,
        //algo asi seria pero no se como
        user_id:user._id
      });
    }
  })
}
//exportacion del modulo controlador
module.exports = usuarioCtrl;