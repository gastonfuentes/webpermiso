"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//desde express importamos un metodo que nos devuelve un objeto en el cual vamos a colocar las rutas
const express_1 = require("express");
const certificadoController_1 = require("../controller/certificadoController");
class CertificadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', certificadoController_1.certificadoController.listarCert);
        this.router.get('/:id', certificadoController_1.certificadoController.listarUno);
        this.router.post('/', certificadoController_1.certificadoController.create); //cuando llamen por post se ejecuta el metodo create
        this.router.delete('/:id', certificadoController_1.certificadoController.delete); //cuando llaman por delete
        this.router.put('/:id', certificadoController_1.certificadoController.actualizar);
    }
}
const certificadoRoutes = new CertificadoRoutes();
exports.default = certificadoRoutes.router;
