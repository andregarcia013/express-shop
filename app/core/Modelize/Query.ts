import DBConnection from "./DB";

export class Query{

    connection: any;

    constructor() {

        this.connection = DBConnection;
    }

}