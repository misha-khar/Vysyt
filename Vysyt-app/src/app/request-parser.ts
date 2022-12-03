import './request';
import { request } from './request';


let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;

function initMap(): void {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(
    request,
    (
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry!.location!);
      }
    }
  );
}

function createMarker(place: google.maps.places.PlaceResult) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

const pittsburgh = new google.maps.LatLng(40.441, -80.0);

export class RequestParser {
    private _map: google.maps.Map;
    private _service: google.maps.places.PlacesService;
    private _infowindow: google.maps.InfoWindow;
    private _request: request;
    private _results = google.maps.places.PlaceResult;

    constructor() {
        this._infowindow = new google.maps.InfoWindow();

        this._map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: pittsburgh,
          zoom: 15,
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
      var r = {query:this.getQuery(), fields:this.getFields()}

      service.findPlaceFromQuery(
        r,
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
    
            map.setCenter(results[0].geometry!.location!);
          }
        }
      );

      return true
    }

    public createMarker(place: google.maps.places.PlaceResult) {
      if (!place.geometry || !place.geometry.location) return;
    
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
    
      google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
      });
    }
}
