const express = require("express");
const { asyncHandler } = require("../helper/helper");
const router = express.Router();

router.get(
    "/",
    asyncHandler(
        async function (req, res) {
            var usersController =
                req.locals.controllerFactory.getUserController(req.locals)
            var results =
                await usersController.getAll({});
            res.send(results);
        }
    )
);

router.post('/', async (req, res) => {
    try {
        var usersController =
            req.locals.controllerFactory.getUserController(req.locals)
console.log("chetan")
req.body =  {
    name: "chetan",
    email: "mohitechetan2019@gmail.com",
    password: "123456",
    dob: "29/11/2001",
    address: "satara"
  }
        var result = await usersController.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router