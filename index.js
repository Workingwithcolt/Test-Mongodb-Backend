const createError = require("http-errors");
const express = require("express");
const userRoutes = require("./routes/Users.js")
const port = 3000;
const cors = require("cors")
const app = express();//middle ware
const multer = require('multer')
const path = require('path')

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

require('./db.js');
require('./models/Users.js');
require("./models/ModalDataSchema.js")

const { mongodbMiddleware } = require('./MongoDB/Mongodbmiddleware.js');

const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public/Images'))

app.use(mongodbMiddleware)

app.use("/users", userRoutes)

console.log("after 49");

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.send(res.locals.error);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})