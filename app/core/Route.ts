
export default class Route {
    handler: any;
    name: string;
    route: string;
    method: string;
    middlewares: Array<any>;


    constructor(route: string, handler:any, method: string, middlewares: Array<any>,name: string = "") {
        this.route = route;
        this.name = name;
        this.handler = handler;
        this.method = method;
        this.middlewares = middlewares;
    }
}