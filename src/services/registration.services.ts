import { Customer } from "../models/customers";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class RegistrationService {

    private customers: Array<Customer>;

    constructor(private http: Http) {
        this.customers = [];
    }
/*
    getAllProducts(callback) {
        this.customers = []
        this.http.get("http://localhost:3000/registration")
            .subscribe(
                result => {
                    console.log("Result: ", result);

                    callback(null, result.json());
                },

                err => {
                    console.log("Err: ", err);

                    callback(err, null);
                }
            );

        // this.http.get("url", {
        //     url: {
        //         toppings: "Pineapple"
        //     }
        // })
    } */

    createCustomer(customerData: Customer, callback: Function) {

        this.http.post("http://localhost:3000/registration", customerData)
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