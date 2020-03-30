"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//desde express importamos un metodo que nos devuelve un objeto en el cual vamos a colocar las rutas
const express_1 = require("express");
//import {comercianteController} from '../controller/certificadoController';
const comercianteController_1 = require("./../controller/comercianteController");
class ComercianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/', certificadoController.listarCert);
        this.router.get('/:id', comercianteController_1.comercianteController.listarUnComerciante);
        this.router.post('/', comercianteController_1.comercianteController.createComerciante); //cuando llamen por post se ejecuta el metodo crear
        this.router.delete('/:id', comercianteController_1.comercianteController.deleteComerciante); //cuando llaman por delete
        this.router.put('/:id', comercianteController_1.comercianteController.actualizar); //actualizar
    }
}
const comercianteRoutes = new ComercianteRoutes();
exports.default = comercianteRoutes.router;
