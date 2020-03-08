import {Authenticate} from "./Authenticate";

export class Controller{

    middlewares: Array<any> = [];

    middleware(middleware: Array<any> ) : void{
       middleware.map(e => {
           this.middlewares.push(e);
       })
    }

}