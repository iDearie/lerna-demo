"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lizhuo_websocket_1 = require("lizhuo-websocket");
var Socket = (function () {
    function Socket() {
        console.log("Socket");
        this.Websocket = new lizhuo_websocket_1.WebSocket();
    }
    Socket.prototype.get = function (id) {
        return id;
    };
    return Socket;
}());
exports.Socket = Socket;
//# sourceMappingURL=index.js.map