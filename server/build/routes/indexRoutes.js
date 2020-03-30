"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { indexController } from './../controller/indexController';
//import indexController from '../controller/indexController';
//desde express importamos un metodo que nos devuelve un objeto en el cual vamos a colocar las rutas
const express_1 = require("express");
const indexController_1 = require("../controller/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
