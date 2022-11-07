class city {
	private _name: string;
	private _zipcode: number;
	private _lat: number;
	private _lon: number;

	// Must have a name
	constructor(name: string, zip?: number, lat?: number, lon?:number) {
		this._name = name;
		if (zip) {this._zipcode = zip;}
		if (lat) {this._lat = lat;}
		if (lon) {this._lon = lon;}
	}

	// Fields should not be changed after creation
	get name() {return this._name;}
	get zipcode() {return this._zipcode;}
	get latitude() {return this._lat;}
	get longitude() {return this._lon;}
}