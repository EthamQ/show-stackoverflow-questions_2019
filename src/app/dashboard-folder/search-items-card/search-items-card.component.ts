// # Angular
import { Component, OnInit, Input } from '@angular/core';

// # Service
import { ISearchResultItem } from 'app/core/services/search.service';

@Component({
  selector: 'app-search-items-card',
  templateUrl: './search-items-card.component.html',
  styleUrls: ['./search-items-card.component.scss']
})
export class SearchItemsCardComponent implements OnInit {

  @Input() query: string;
  @Input() searchItems: ISearchResultItem[];

  readonly totalAmountSearchItems = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
