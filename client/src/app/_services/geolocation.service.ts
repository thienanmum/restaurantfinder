import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Coordinates } from '../_models/coordinates';
import { Address } from '../_models/address';

const GEOLOCATION_ERRORS = [
    'Browser does not support location services',
    'You have rejected access to your location',
    'Unable to determine your location',
    'Service timeout has been reached'
];

declare var google: any;

@Injectable()
export class GeolocationService  {

    constructor() {}
    
    public getCurrentLocation(): Observable<Coordinates> {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        observer.next(new Coordinates({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy
                        }));
                        observer.complete();
                    },
                    (error) => observer.error(GEOLOCATION_ERRORS[+error.code]));
            } else {
                observer.error(GEOLOCATION_ERRORS[0]);
            }
        });
    }

    // Resolve the address to lat and lgn, following the example at : 
    // https://github.com/SebastianM/angular-google-maps/issues/689
    public getLocation(address: Address): Observable<Coordinates> {
        console.log("Resolving address:" + address.fullAddress);
        let geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            geocoder.geocode( { 'address': address.fullAddress}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(new Coordinates({
                        latitude:results[0].geometry.location.lat(),
                        longitude: results[0].geometry.location.lng()
                    }));
                    observer.complete();                    
                } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        })
    }
}
