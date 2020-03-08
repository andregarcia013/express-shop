import App from "./app/core/App";
import {WebRouter} from "./routes/web";
import {ApiRouter} from "./routes/api";
import {AdminMiddleware} from "./app/http/middlewares/AdminMiddleware";
require('dotenv').config();



let application = new App();

application.start([ new WebRouter(), new ApiRouter() ], [ {
    "middleware": new AdminMiddleware(),
    'name': "admin"
} ] );