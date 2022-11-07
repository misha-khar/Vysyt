class request {
    private _priceLevel: number;
    private _placeType: string;
    private _city: city;
    private _country: country;

    get priceLevel() {
        return this._priceLevel;
    }

    get placeType() {
        return this._placeType;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    constructor(priceLevel?: number, placeType?: string, city?: city, country?: country) {
        if(priceLevel) {this._priceLevel = priceLevel;}
        if(placeType) {this._placeType = placeType;}
        if(city) {this._city = city;}
        if(country) {this._country = country;}
    }

}
