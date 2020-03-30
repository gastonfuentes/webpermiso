import {Request,Response} from 'express';
import pool from '../database';

class ComercianteController
{
    
    /**
     * listarUno
     */
    public async listarUnComerciante(req: Request, res: Response){
        const {id} = req.params; //obtenemos el id a mostrar
        await pool.query('SELECT * FROM organizaciones WHERE id_org = ?', [id], function(err, result, fields){
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
    public async createComerciante(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO organizaciones set ?', [req.body]);
        //console.log(req.body);
        res.json({text: 'org guardado'});
    }

    /**
     * delete
     */
    public async deleteComerciante(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM organizaciones WHERE id_org = ?',[id]);
        res.json({message: 'la org fue eliminado'});
    }

    /**
     * actualizar     */
    public async actualizar(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE organizaciones set ? WHERE id_org = ?', [req.body, id]);
        res.json({message: 'el org fue actualizado'});
    }
    
}

export const comercianteController = new ComercianteController();
