"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
// Connection
var connect_1 = require("./connect");
// Router
var routes_1 = require("./routes");
var app = express();
var port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("Welcome");
});
app.listen(port, function () {
    console.log("Server was started on", port, " port");
});
var db = "mongodb://lab.lectrum.io:37019/express";
connect_1.connectDB({ db: db });
routes_1.routes({ app: app });
