//import { indexController } from './../controller/indexController';
//import indexController from '../controller/indexController';
//desde express importamos un metodo que nos devuelve un objeto en el cual vamos a colocar las rutas
import { Router } from 'express';
import {indexController} from '../controller/indexController';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;