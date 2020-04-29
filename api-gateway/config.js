/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   26 April 2020
; Modified By: Diandra McKenzie
; Description: Configuring the port for a RESTful security service.
;===========================================
*/

// start program

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000'; 
module.exports = config;

//end program