import Router from "../app/core/Router";
import {UserController} from "../app/http/controllers/UserController";


export class WebRouter extends Router {
    constructor() {
        super();
        this.defaultPath = '/';
        this.get("/", new UserController().welcome,  ["admin"] );
    }
}