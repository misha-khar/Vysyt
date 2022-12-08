import { GlobalVars } from './global-vars';
import './request';
import { request } from './request';

const pittsburgh = new google.maps.LatLng(40.441, -80.0);

export class RequestParser {
    private _map: google.maps.Map;
    private _service: google.maps.places.PlacesService;
    private _infowindow: google.maps.InfoWindow;
    private _request: request;

    constructor() {
        this._infowindow = new google.maps.InfoWindow();

        this._map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: pittsburgh,
          zoom: 12,
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

    private delay (ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms));
    }

    public async sendRequest(){
      if (this.getQuery() === "") {return false;}
      this._query(this.getQuery());
      await this.delay(2000);
      this._queryNearby('restaurant', 5);
      this._queryNearby('lodging');
      this._queryNearby('museum');
      this._queryNearby('park');
      this._queryNearby('aquarium', 1);
      this._queryNearby('night_club');
      return true;
    }

    private _createMarker(place: google.maps.places.PlaceResult) {
      console.log(place.name);
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

    private _query(query: string) {
      var r = {query: query, fields: ["name", "geometry"]}
      this._service.findPlaceFromQuery(
        r,
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            this._createMarker(results[0]);
            this._map.setCenter(results[0].geometry!.location!);
            GlobalVars.globalLat = results[0].geometry!.location!.lat();
            GlobalVars.globalLon = results[0].geometry!.location!.lng();
            GlobalVars.globalPlace = results[0].name!;
            console.log("Valid Request");
            
          } else {
            console.log("Invalid Request")
          }
          return true;
        }
      );
    }

    // query type must be a supported type
    // see https://developers.google.com/maps/documentation/javascript/supported_types
    private _queryNearby(type: string, numPlaces: number = 2) {
      var r = {
        location: new google.maps.LatLng(GlobalVars.globalLat, GlobalVars.globalLon),
        type: type,
        radius: 500,
        minPriceLevel: GlobalVars.globalMinVal,
        maxPriceLevel: GlobalVars.globalMaxVal
      }
      this._service.nearbySearch(
        r,
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          console.log(status);          
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            let i: number;
            if (results.length > numPlaces) {
              i = numPlaces;
            } else {
              i = results.length;
            }
            for (; i>=0; i--) {
              this._createMarker(results[i]);
            }
          }
        }
      )// end nearbySearch
    }// end _queryNearby
}
