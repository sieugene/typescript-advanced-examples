"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var routes = function (_a) {
    var app = _a.app;
    app.get("/api/user", function (req, res) {
        return res.send('Test');
    });
};
exports.routes = routes;
