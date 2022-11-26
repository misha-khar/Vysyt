export class userInputs {
  private _place: string;
  private _minPrice: number;
  private _maxPrice: number;
  private _placeType: string;

  // Must have a name
  constructor(place?: string, minPrice?: number, maxPrice?: number, placeType?: string) {
    if (place) { this._place = place; }
    if (minPrice) { this._minPrice = minPrice; }
    if (maxPrice) { this._maxPrice = maxPrice; }
    if (placeType) { this._placeType = placeType }
  }


  // Fields should not be changed after creation
  get place() { return this._place; }
  get minPrice() { return this._minPrice; }
  get maxPrice() { return this._maxPrice; }
  get placeType() { return this._placeType }

}
