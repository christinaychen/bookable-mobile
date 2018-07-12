//import { Customer } from "../models/customers";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class MapService {


    constructor(private http: Http) {
    }
    updateMap(venueId: number, callback: Function) {

        this.http.post("http://localhost:3000/Maps/{venueId}", {
            venueId: venueId
        })
            .subscribe(
                result => {
                    callback(null, result.json());
                },

                err => {
                    callback(err, null);
                }
            );

    }
}