import Router from "../app/core/Router";
import {UserController} from "../app/http/controllers/UserController";


export class ApiRouter extends Router {
    constructor() {
        super();
        this.defaultPath = '/api';
        this.get("/", new UserController().welcome,  ["basic"] );
    }
}