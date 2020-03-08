import * as express from "express";
import * as path from "path";
import * as session from "express-session";
import Route from "./Route";


export default class App {

    app: any;
    private static _instance: App;

    start(routes: Array<any> = [], middleware: Array<any>) {
        this.app = express();
        let sess = {
            secret: 'keyboard cat',
            cookie: {},
        }
        this.app.use(session(sess));
        this.app.set('views', path.join(__dirname, '/../../resources/views'));
        this.app.set('view engine', 'pug');
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

        this.generateRoutes(routes);
        const PORT = process.env.PORT || 3000;
        this.app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`)
        });

        return true;
    }

    generateRoutes(routes: Array<any> = []) {
        console.log(routes);

        routes.map((route) => {
            let router = express.Router();

            for (let i in route.routes) {
                switch (route.routes[i].method) {
                    case "GET":
                        router.get('/', route.routes[i].handler);
                        break;
                }
            }

            this.app.use(route.defaultPath, router);
        })
    }
}