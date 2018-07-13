import { Injectable } from "@angular/core";
import { Venue } from "../models/venue";


@Injectable()


export class VenueService {
    private venues: Array<Venue>;

    constructor() {
        this.venues = [];


    }

    getAllVenues() {
        this.venues = [];

        var venue1 = new Venue;
        venue1.name = "V&A Food Market";
        venue1.latitude = -33.9066;
        venue2.longitude = 18.4193;

        var venue2 = new Venue;
        venue2.name = "Kauai";
        venue2.latitude=-33.9056;
        venue2.longitude=18.4199;
        
        var venue3 = new Venue;
        venue3.name = "Radisson RED Hotel"
        venue3.latitude = -33.9086;
        venue3.longitude = 18.4227;
    
        this.venues.push(venue1);
        this.venues.push(venue2);
        this.venues.push(venue3);


        return this.venues;
    }
}
