import './request';
import { request } from './request';

const pittsburgh = new google.maps.LatLng(40.441, -80.0);

export class RequestParser {
    private _map: google.maps.Map;
    private _service: google.maps.places.PlacesService;
    private _infowindow: google.maps.InfoWindow;
    private _request: request;
    private _results: google.maps.places.PlaceResult[];


    constructor() {
        this._infowindow = new google.maps.InfoWindow();

        this._map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: pittsburgh,
          zoom: 7,
        });

        this._service = new google.maps.places.PlacesService(this._map);
        this._request = new request();
    }

    public setQuery(query: string){
      this._request.setQuery(query);
    }

    public addField(field: string){
      this._request.addField(field);
    }

    public clearFields(){
      this._request.removeAllFields();
    }

    public getQuery() {
      return this._request.query;
    }

    public getFields() {
      return this._request.fields;
    }

    public sendRequest(){
      if (this.getQuery() === "") {return false;}
      var r = {query:this.getQuery(), fields:this._request.fields}

      this._service.findPlaceFromQuery(
        r,
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            this._results.push(results[0]);
            this._createMarker(results[0]);
            this._map.setCenter(results[0].geometry!.location!);
          }
        }
      );

      return true
    }

    private _createMarker(place: google.maps.places.PlaceResult) {
      if (!place.geometry || !place.geometry.location) return;

      const marker = new google.maps.Marker({
        map: this._map,
        position: place.geometry.location,
      });

      google.maps.event.addListener(marker, "click", () => {
        this._infowindow.setContent(place.name || "");
        this._infowindow.open(this._map);
      });
    }
}
