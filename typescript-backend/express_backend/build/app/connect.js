"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
var mongoose_1 = require("mongoose");
var connectDB = function (_a) {
    var db = _a.db;
    var connectFN = function () {
        mongoose_1.connect(db)
            .then(function () {
            return console.info("Successfully connected to " + db);
        })
            .catch(function (err) {
            console.error("Error connection" + err.message);
            return process.exit();
        });
    };
    connectFN();
    mongoose_1.connection.on("disconnected", connectFN);
};
exports.connectDB = connectDB;
