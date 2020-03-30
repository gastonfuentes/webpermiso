"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CertificadoController {
    listarCert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM certificados_empleados', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    /**
     * listarUno
     */
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtenemos el id a mostrar
            yield database_1.default.query('SELECT * FROM certificados_empleados WHERE id_emp = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            //mostramos el id seleccionado
            //if(comer.lenght > 0)
            //console.log(comer);
            //res.json({text: 'comerciante encontrado'});
        });
    }
    /**
     * create
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO certificados_empleados set ?', [req.body]);
            res.json({ text: 'certificado guardado' });
        });
    }
    /**
     * delete
     */
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM certificados_empleados WHERE id_emp = ?', [id]);
            res.json({ message: 'el certificado fue eliminado' });
        });
    }
    /**
     * actualizar     */
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE certificados_empleados set ? WHERE id_emp = ?', [req.body, id]);
            res.json({ message: 'el certificado fue actualizado' });
        });
    }
}
exports.certificadoController = new CertificadoController();
