import {Client} from 'ts-postgres';

class DB {
    client: any = false;

    constructor() {

    }

    async connect() {
        this.client = new Client();
        await this.client.connect();
    }

    close(){
        if(this.client.close !== false){
            this.client.close();
        } else {
            console.log('You must start a connection to close one!')
        }
    }
}

/**
 *  DB Connection must have just a unique connection with the database.
 * */
const DBConnection: DB = new DB;
Object.freeze(DBConnection);

export default DBConnection;