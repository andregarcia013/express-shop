import * as express from "express";


export default class App {

    start() : void {

        const app = express();

        app.get("/", (req, res) => {
            res.send("Hello World")
        });

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`)
        });
    }
}