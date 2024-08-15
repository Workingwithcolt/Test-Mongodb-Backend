const express = require('express');
const router = express.Router();
require('dotenv').config();
"use strict";   


router.post('/signup', async (req, res) => {
    var usersController =
        req.locals.controllerFactory.getUserController(req.locals)
    try {
        let data = await usersController.create(req.body);
        console.log(data)
        res.status(200).send({ message: "User Registered Successfully", data });
    } catch (createError) {
        console.error("Error creating user:", createError);
        var errorMsg;
        errorMsg = 'Error creating user';
        res.status(500).send({ error: 'Internal server error' }, errorMsg);
    }

})


module.exports = router;