class request {
    private _priceLevel: number;
    private _placeType: string;
    private _city: City;
    private _country: Country;

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

    constructor(priceLevel?: number, placeType?: string, city?: City, country?: Country) {
        if(priceLevel) {this._priceLevel = priceLevel;}
        if(placeType) {this._placeType = placeType;}
        if(city) {this._city = city;}
        if(country) {this._country = country;}
    }

}
