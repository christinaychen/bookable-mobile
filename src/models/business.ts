import { Categories } from "./categories";
import { Coordinates } from "./coordinates";
import { Location } from "./location";


export class Business {
    
    name: string;
    image_url: string;
    rating: number;
    price: string;
    id: string;
    categories: Categories[];
    coordinates: Coordinates;
    location: Location;


}