

export class Location{
    locationId: number;
    private _city: string;
    private _country: string;


    constructor(locationId: number, city: string, country: string) {
        this.locationId = locationId;
        this._city = city;
        this._country = country;
    }


    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    toString(){
        return "city:"+ this._city + ", country:" + this._country;
    }

    toJson(): string {
        return JSON.stringify({
            locationId: this.locationId,
            city: this._city,
            country: this._country
        });
    }

    static fromJson(jsonString: string): Location {
        const obj = JSON.parse(jsonString);
        return new Location(obj.locationId, obj.city, obj.country);
    }
}