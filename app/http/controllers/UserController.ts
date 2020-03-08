import {Controller} from "../../core/Controller";
import Response from "../../core/Response";


export class UserController extends Controller{

  async welcome(request: any, response: any){
      return response.send("WELCOME");
  }
}

