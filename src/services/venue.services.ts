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
        venue1.name = "American Airlines";
        var venue2 = new Venue;
        venue2.name = "Cheesecake Factory";
        var venue3 = new Venue;
        venue3.name = "Regal Theaters"
        var venue4 = new Venue;
        venue4.name = "American Airlines";
        var venue5 = new Venue;
        venue5.name = "Cheesecake Factory";
        var venue6 = new Venue;
        venue6.name = "Regal Theaters"
        var venue7 = new Venue;
        venue7.name = "American Airlines";
        var venue8 = new Venue;
        venue8.name = "Cheesecake Factory";
        var venue9 = new Venue;
        venue9.name = "Regal Theaters"

        this.venues.push(venue1);
        this.venues.push(venue2);
        this.venues.push(venue3);
        this.venues.push(venue4);
        this.venues.push(venue5);
        this.venues.push(venue6);
        this.venues.push(venue7);
        this.venues.push(venue8);
        this.venues.push(venue9);

        return this.venues;
    }
}
