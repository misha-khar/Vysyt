export class userInputs {
  private _place: string;
  private _minPrice: Int16Array;
  private _maxPrice: Int16Array;
  private _isCity: string;

  // Must have a name
  constructor(place?: string, minPrice?: Int16Array, maxPrice?: Int16Array, isCity?: string) {
    if (place) { this._place = place; }
    if (minPrice) { this._minPrice = minPrice; }
    if (maxPrice) { this._maxPrice = maxPrice; }
    if (isCity) { this._isCity = isCity }
  }


  // Fields should not be changed after creation
  get place() { return this._place; }
  get minPrice() { return this._minPrice; }
  get maxPrice() { return this._maxPrice; }
  get isCity() { return this._isCity }

}
