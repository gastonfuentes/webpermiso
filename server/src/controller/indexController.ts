import {Request,Response} from 'express';

class IndexController
{
    public index (req: Request, res: Response){
    res.json({text: "hola culiaoo" });
    }
    
}

export const indexController = new IndexController();