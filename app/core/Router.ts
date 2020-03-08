import * as express from "express";
import App from "./App";
import Route from "./Route";


export default class Router {

    router: any;
    routes: Array<Route>;
    defaultPath: string;

    constructor() {

        this.routes = [];

    }

    /**
     *  @description Register a GET route.
     * */
    get( route: string, func: any, middlewares: Array<any> ) {
        let routeToPush = new Route(route, func, "GET", middlewares);
        this.routes.push(routeToPush);
    }

    /**
     *  @description Register a POST route.
     * */
    post( route: string, func: any, middlewares: Array<any> ) {
        let routeToPush = new Route(route, func, "GET", middlewares);
        this.routes.push(routeToPush);
    }

    /**
     *  @description Register a PUT route.
     * */
    put( route: string, func: any, middlewares: Array<any>) {
        let routeToPush = new Route(route, func, "PUT", middlewares);
        this.routes.push(routeToPush);
    }

    /**
     *  @description Register a DELETE route.
     * */
    delete( route: string, func: any, middlewares: Array<any>) {
        let routeToPush = new Route(route, func, "DELETE", middlewares);
        this.routes.push(routeToPush);
    }

    /**
     *  @description Register a OPTION route.
     * */
    option( route: string, func: any, middlewares: Array<any>) {
        let routeToPush = new Route(route, func, "OPTION", middlewares);
        this.routes.push(routeToPush);
    }
}