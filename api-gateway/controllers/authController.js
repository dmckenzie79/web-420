/*
============================================
; Title:  authController.js
; Author: Professor Krasso
; Date:   4 May 2020
; Modified By: Diandra McKenzie
; Description: Orchestrate the messages between  
; our service calls and Mongo database.
;===========================================
*/

//start program

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};
// Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};

//end program
