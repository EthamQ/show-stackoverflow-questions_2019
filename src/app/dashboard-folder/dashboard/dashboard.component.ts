
// # Service
import { ISearchResultItem, SearchService } from 'app/core/services/search.service';

// # Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // # Input values for child components
  searchResultItems: ISearchResult[] = [];
  weatherSearchResultItems: ISearchResultItem[];

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    // Get result items from stackoverflow that are not weather.
    // Weather is handled separately.
    this.stackOverFlowQueries.forEach(query => this.addSearchResults(query));

    // Get weather result items from stackoverflow.
    this.addWeatherSearchResults();
  }

  /**
   * Request results from stackoverflow.
   * Add the results to the array of results.
   * @param query The term you want results for.
   */
  addSearchResults(query: string): void {
    const subscription = this._searchService.search(query).subscribe(searchResultItems => {
      this.searchResultItems.push({ query, searchResultItems });
      subscription.unsubscribe();
    });
  }

  /**
   * Request results for weather from stackoverflow.
   * Add the results to the global weather variable.
   */
  addWeatherSearchResults(): void {
    const subscription = this._searchService.search(this.stackOverFlowWeatherQuery).subscribe(weatherSearchResultItems => {
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



