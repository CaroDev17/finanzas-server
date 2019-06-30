var express = require("express");
var router = express.Router();
const session = require('express-session');

var registerModel = require("../models/UsersModel");

router.get("/miop", function (req, res) {
  // console.log('Mi operacion');
  res.send('Hello world');
});


/* GET home page. */
router.get("/", function (req, res, next) {
  var proof = "Esto es una prueba de consola";
  res.render("index", {
    title: "Ingresa a tus finanzas",
    titles: "MyAPP - MisFinanzas"
  });
  //console.log(proof);
});

router.post("/api/nuevo", function (req, res, next) {
  //console.log("--> ", req.body);

  var usuarioNew = new registerModel({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  // res.send('Usuario de Alta');

  //console.log("Llego este mensaje ", usuarioNew);

  usuarioNew.save(function (error, documento) {
    if (error) {
      return console.error(error);
    } else {

      // console.log(documento);

      res.send(
        `El usuario ${documento.name} ${
           documento.lastName
         } ha sido dado de alta con el ID: ${documento._id}`
      );
    }
  });


});

router.get("/api/login", function (req, res) {

  console.log('mail-> ', req.body.email);
  console.log('pass-> ', req.body.pass);
  c
  registerModel.find({
    email: req.body.email,
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