//desde express importamos un metodo que nos devuelve un objeto en el cual vamos a colocar las rutas
import { Router } from 'express';
//import {comercianteController} from '../controller/certificadoController';
import { comercianteController } from './../controller/comercianteController';


class ComercianteRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', certificadoController.listarCert);
        this.router.get('/:id', comercianteController.listarUnComerciante);
        this.router.post('/', comercianteController.createComerciante);//cuando llamen por post se ejecuta el metodo crear
        this.router.delete('/:id', comercianteController.deleteComerciante);//cuando llaman por delete
        this.router.put('/:id', comercianteController.actualizar);//actualizar
        
    }
}

const comercianteRoutes = new ComercianteRoutes();
export default comercianteRoutes.router;