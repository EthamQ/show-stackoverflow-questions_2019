// # Angular
import { Component, OnInit, Input } from '@angular/core';

// # Model
import { IWeatherData } from 'app/core/services/weatherdata';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  @Input() weatherItem: IWeatherData;

  constructor() { }

  ngOnInit(): void {
  }

}
