import './city';
import './country';

export class request {
    private _priceLevel: number;
    private _placeType: string;
    private _city: City;
    private _country: Country;

    private _query: string;
    private _fields: string[];

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

    constructor(query?: string, fields?: string[]) {
        if (query) {this._query = query;}
        if (fields) {this._fields = fields;}
    }

    public setQuery(query: string) {
        this._query = query;
    }

    public addField(field: string) {
        this._fields.push(field);
    }

    public removeAllFields() {
        this._fields = [];
    }

    get query() {
        return this._query;
    }

    get fields() {
        return this._fields;
    }

}
