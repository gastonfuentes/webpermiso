"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: "hola culiaoo" });
    }
}
exports.indexController = new IndexController();
