/* import { Injectable } from "@angular/core";
import { Venue } from "../models/venue";



@Injectable()


export class RegistrationService {
    private venues: Array<Venue>;

    constructor() {
       // this.users = [];
    }
    getAllUsers(callback){
        this.http.get("http://localhost:3000/customer")
            .subscribe(
                result => {
                    console.log("Result: ", result);
                    callback (null, result);
                }
                err => {
                    console.log
                }
            )
    }
} */
