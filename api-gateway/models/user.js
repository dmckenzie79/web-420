/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   4 May 2020
; Modified By: Diandra McKenzie
; Description: Create User model and Schema.
;===========================================
*/

//start program

/**
Fields username, password, and email
*/
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);

/**
Database queries
*/

//end program