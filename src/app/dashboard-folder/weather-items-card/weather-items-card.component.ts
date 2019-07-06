// # Angular
import { Component, OnInit, Input } from '@angular/core';

// # Service
import { ISearchResultItem } from 'app/core/services/search.service';

// # Model
import { IWeatherData } from 'app/core/services/weatherdata';

@Component({
  selector: 'app-weather-items-card',
  templateUrl: './weather-items-card.component.html',
  styleUrls: ['./weather-items-card.component.scss']
})
export class WeatherItemsCardComponent implements OnInit {

  @Input() weatherSearchResultItems: ISearchResultItem[];
  @Input() weatherDataJSON: IWeatherData[];

  readonly totalNumberEntries = 10;

  // Template ngFor would show index 0 -> 2 -> 4 ... (because index % 2 === 0)
  // but we want to show index 0 -> 1 -> 2 -> ... to display the latest entries by date in the sorted array.
  // So we have the index in a separate variable that we increment. (0 -> 1 -> 2 -> ...)
  indexSearchResultsToDisplay = -1;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Get index of stackoverflow weather items array to display.
   * Increment index for next call.
   */
  get indexSearchResults(): number {
    this.indexSearchResultsToDisplay++;
    // If by any reason this method is called too often the modulo will handle it.
    // Half of the total amount of entries are made up by the stackoverflow result items.
    return this.indexSearchResultsToDisplay % (this.totalNumberEntries / 2);
  }

}
