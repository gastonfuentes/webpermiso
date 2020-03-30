import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import certificadoRoutes from './routes/certificadoRoutes';
import comercianteRoutes from './routes/comercianteRoutes';

class Server {

    public app: Application;    

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    //se encarga de configurar la propiedad app
    config(): void{ 
        this.app.set('port', process.env.PORT || 3000); //si existe un puerto lo toma, en caso contrario ejecuta el puerto 3 mil
        this.app.use(morgan("dev")); //muestra por consola que peticiones hace el usuario
        this.app.use(cors());//sirve para que angular pida datos al servidor
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //definimos las rutas del servidor
    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/api/certificados',certificadoRoutes);
        //this.app.use('/api/comerciantes',comercianteRoutes);
        this.app.use('/api/org',comercianteRoutes);

    }

    //inicia el servidor
    start(): void{ 
        this.app.listen(this.app.get('port'),()=>{
            console.log('server conectado ', this.app.get('port'));
        })
        
    }
}

const server = new Server();
server.start();