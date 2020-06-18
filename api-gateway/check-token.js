/*
============================================
; Title:  check-token.js
; Author: Professor Krasso
; Date:   17 June 2020
; Modified By: Diandra McKenzie
; Description: Configuring the port for a RESTful security service.
;===========================================
*/

// start program

var jwt = require('jsonwebtoken');
var config = require('./config');


/**
 * Check the HTTP header for a valid JSON web token
 * @param req
 * @param res
 * @param next
 */
function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}


module.exports = checkToken;

// end program
