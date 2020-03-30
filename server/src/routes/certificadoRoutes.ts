//desde express importamos un metodo que nos devuelve un objeto en el cual vamos a colocar las rutas
import { Router } from 'express';
import {certificadoController} from '../controller/certificadoController';

class CertificadoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', certificadoController.listarCert);
        this.router.get('/:id', certificadoController.listarUno);
        this.router.post('/', certificadoController.create);//cuando llamen por post se ejecuta el metodo create
        this.router.delete('/:id', certificadoController.delete);//cuando llaman por delete
        this.router.put('/:id', certificadoController.actualizar);
        
    }
}

const certificadoRoutes = new CertificadoRoutes();
export default certificadoRoutes.router;