"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const certificadoRoutes_1 = __importDefault(require("./routes/certificadoRoutes"));
const comercianteRoutes_1 = __importDefault(require("./routes/comercianteRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //se encarga de configurar la propiedad app
    config() {
        this.app.set('port', process.env.PORT || 3000); //si existe un puerto lo toma, en caso contrario ejecuta el puerto 3 mil
        this.app.use(morgan_1.default("dev")); //muestra por consola que peticiones hace el usuario
        this.app.use(cors_1.default()); //sirve para que angular pida datos al servidor
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //definimos las rutas del servidor
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/certificados', certificadoRoutes_1.default);
        //this.app.use('/api/comerciantes',comercianteRoutes);
        this.app.use('/api/org', comercianteRoutes_1.default);
    }
    //inicia el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server conectado ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
