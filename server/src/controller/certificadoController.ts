import {Request,Response} from 'express';
import pool from '../database';

class CertificadoController
{
    public async listarCert (req: Request, res: Response){
        await pool.query('SELECT * FROM certificados_empleados', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    /**
     * listarUno
     */
    public async listarUno(req: Request, res: Response){
        const {id} = req.params; //obtenemos el id a mostrar
        await pool.query('SELECT * FROM certificados_empleados WHERE id_emp = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json(result);
        });
        //mostramos el id seleccionado
        //if(comer.lenght > 0)
        //console.log(comer);
        //res.json({text: 'comerciante encontrado'});
    }

    /**
     * create
     */
    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO certificados_empleados set ?', [req.body]);
        res.json({text: 'certificado guardado'});
    }

    /**
     * delete
     */
    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM certificados_empleados WHERE id_emp = ?',[id]);
        res.json({message: 'el certificado fue eliminado'});
    }

    /**
     * actualizar     */
    public async actualizar(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE certificados_empleados set ? WHERE id_emp = ?', [req.body, id]);
        res.json({message: 'el certificado fue actualizado'});
    }
    
}

export const certificadoController = new CertificadoController();
