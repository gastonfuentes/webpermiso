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
class ComercianteController {
    /**
     * listarUno
     */
    listarUnComerciante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtenemos el id a mostrar
            yield database_1.default.query('SELECT * FROM organizaciones WHERE id_org = ?', [id], function (err, result, fields) {
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
    createComerciante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO organizaciones set ?', [req.body]);
            //console.log(req.body);
            res.json({ text: 'org guardado' });
        });
    }
    /**
     * delete
     */
    deleteComerciante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM organizaciones WHERE id_org = ?', [id]);
            res.json({ message: 'la org fue eliminado' });
        });
    }
    /**
     * actualizar     */
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE organizaciones set ? WHERE id_org = ?', [req.body, id]);
            res.json({ message: 'el org fue actualizado' });
        });
    }
}
exports.comercianteController = new ComercianteController();
