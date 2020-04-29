/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   26 April 2020
; Modified By: Diandra McKenzie
; Description: Router for Landing Page
;===========================================
*/

// start program

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//end program
