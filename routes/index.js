var express = require("express");
var router = express.Router();
const session = require('express-session');

var modelsRegistro = require("../models/RegistroUsuarios");

router.get("/miop", function (req, res) {
  console.log('Mi operacion');
  res.send('Hello world');
});


/* GET home page. */
router.get("/", function (req, res, next) {
  var proof = "Esto es una prueba de consola";
  res.render("index", {
    title: "Ingresa a tus finanzas",
    titles: "MyAPP - MisFinanzas"
  });
  console.log(proof);
});

router.post("/api/nuevo", function (req, res, next) {
  console.log("--> ", req.body);

  var usuarioNew = new modelsRegistro({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    mail: req.body.mail,
    pass: req.body.password
  });
  // res.send('Usuario de Alta');

  console.log("Llego este mensaje ", usuarioNew);

  usuarioNew.save(function (error, documento) {
    if (error) {
      return console.error(error);
    } else {
      res.send(
        `El usuario ${documento.nombre} ${
           documento.apellido
         } ha sido dado de alta con el ID: ${documento._id}`
      );
    }
  });


});

router.get("/api/login", function (req, res) {

  console.log('mail-> ', req.body.mail);
  console.log('pass-> ', req.body.pass);

  modelsRegistro.find({
    mail: req.body.mail,
    pass: req.body.pass
  }, function (error, documento) {
    if (error) {
      return console.error('error', error)
    } else {
      console.log('doc ', documento)

      ret = null;

      if (documento.length > 0) {
        ret = {
          exist: true
        };
        res.redirect('/users');
      } else {
        ret = {
          exist: false
        };
        res.redirect('/index');
      }



    }
  })


});

module.exports = router;