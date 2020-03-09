import * as express from "express";
import * as path from "path";
import * as session from "express-session";
import Route from "./Route";


export default class App {

    app: any;
    middlewares: Array<any>;
    constructor() {
    }

    /**
     *  @description Start the Application and register Routes and Middlewares
     *  @param routes Array Register a array of Routers;
     *  @param middlewares Register a array of Middleware Handlers
     * */
    start(routes: Array<any> = [], middlewares: Array<any>) {
        this.app = express();
        let sess = {
            secret: 'keyboard cat',
            cookie: {},
        };
        this.middlewares = middlewares;
        this.app.use(session(sess));
        this.app.set('views', path.join(__dirname, '/../../resources/views'));
        this.app.set('view engine', 'pug');
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.static(path.join(__dirname, '/../../public')));

        this.generateRoutes(routes);
        const PORT = process.env.PORT || 3000;
        this.app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`)
        });

        return true;
    }

    generateRoutes(routes: Array<any> = []) {
        routes.map((route) => {
            let router = express.Router();

            for (let i in route.routes) {
                this.registerMiddlewares(route.routes[i].route, route.routes[i].middlewares)

                switch (route.routes[i].method) {
                    case "GET":
                        router.get( route.routes[i].route, route.routes[i].handler);
                        break;
                    case "POST":
                        router.post( route.routes[i].route, route.routes[i].handler);
                        break;
                    case "PUT":
                        router.put(route.routes[i].route, route.routes[i].handler);
                        break;
                    case "DELETE":
                        router.delete(route.routes[i].route, route.routes[i].handler);
                        break;
                    case "OPTION":
                        router.option(route.routes[i].route, route.routes[i].handler);
                        break;
                }
            }
            this.app.use(route.defaultPath, router);
        })
    }

    registerMiddlewares(route: string, middlewares: Array<any>){
      middlewares.map((middleware) =>{
           this.middlewares.find((e) =>{
              if(e.name == middleware){
                  this.app.use(route,  e.middleware.handle);
              }
          });

      })
    }
}