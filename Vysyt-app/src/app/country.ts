class Country {
	private _name: string;
	private _capital: string;

	// Must have a name
	constructor(name: string, capital: string) {
		this._name = name;
		this._capital = capital;
	}

	// Fields should not be changed after creation
	get name() {return this._name;}
	get capital() {return this._capital;}

}
