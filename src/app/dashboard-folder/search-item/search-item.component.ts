// # Angular
import { Component, OnInit, Input } from '@angular/core';

// # Service
import { ISearchResultItem } from 'app/core/services/search.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() searchItem: ISearchResultItem;

  constructor() { }

  ngOnInit(): void {
  }

}
