
// # Service
import { ISearchResultItem, SearchService } from 'app/core/services/search.service';
import { JsonService } from 'app/core/services/json.service';

// # Angular
import { Component, OnInit } from '@angular/core';

// # Models
import { IWeatherData } from '../../core/services/weatherdata';

// # Other own files
import * as weather from '../../core/services/weatherdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // # Weather
  weatherSearchResultItems: ISearchResultItem[];
  weatherDataJSON: IWeatherData[];

  // # Other Results
  searchResultItems: ISearchResult[] = [];

  constructor(
    private _searchService: SearchService,
    private _jsonService: JsonService
    ) { }

  ngOnInit(): void {
    // Get result items from stackoverflow that are not weather.
    // Weather is handled separately.
    this.stackOverFlowQueries.forEach(query => {
        this.addSearchResults(query);
    });

    // Get weather result items from stackoverflow.
    this.addWeatherSearchResults();
    // Get our weather results from our JSON object.
    this.weatherDataJSON = this._jsonService.transformWeatherJSON(weather.weatherData);
  }

  /**
   * Request results from stackoverflow and sort them by date descending.
   * Add the results to the array of results.
   * @param query The term you want results for.
   */
  addSearchResults(query: string): void {
    const subscription = this._searchService.search(query).subscribe(searchResultItems => {
      searchResultItems.sort((a, b) =>  b.creation_date - a.creation_date);
      this.searchResultItems.push({ query, searchResultItems });
      subscription.unsubscribe();
    });
  }

  /**
   * Request results for weather from stackoverflow and sort them by date descending.
   * Add the results to the global weather variable.
   */
  addWeatherSearchResults(): void {
    const subscription = this._searchService.search(this.stackOverFlowWeatherQuery).subscribe(weatherSearchResultItems => {
      weatherSearchResultItems.sort((a, b) =>  b.creation_date - a.creation_date);
      this.weatherSearchResultItems = weatherSearchResultItems;
      subscription.unsubscribe();
    });
  }

  get stackOverFlowQueries(): string[] {
    return ['angular2', 'TypeScript'];
  }

  get stackOverFlowWeatherQuery(): string {
    return 'weather';
  }

}

export interface ISearchResult {
  query: string;
  searchResultItems: ISearchResultItem[];
}



