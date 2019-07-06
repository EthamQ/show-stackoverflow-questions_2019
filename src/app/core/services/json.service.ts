import { Injectable } from '@angular/core';
import { IWeatherData } from './weatherdata';
import * as weather from './weatherdata';

/**
 * Service to transform objects in json format to a more developer friendly typescript object format.
 */
@Injectable()
export class JsonService {

  constructor() { }

  /**
   * Transform the weather json object to a IWeatherData object.
   * @param weatherJSON Json object from weatherdata.ts.
   */
  transformWeatherJSON(weatherJSON: any[]): IWeatherData[] {
    const propNames = weather.weatherProperties;
      return weatherJSON.map(jsonEntry => {
        return {
          datum: jsonEntry[propNames.datum],
          zeit: jsonEntry[propNames.zeit],
          tempA: jsonEntry[propNames.tempA],
          temp3: jsonEntry[propNames.temp3],
          feuchteA: jsonEntry[propNames.feuchteA],
          luftdruck: jsonEntry[propNames.luftdruck],
          regen: jsonEntry[propNames.regen],
          wind: jsonEntry[propNames.wind],
          richtung: jsonEntry[propNames.richtung],
          helligkeit: jsonEntry[propNames.helligkeit],
        }
      });
  }

}
