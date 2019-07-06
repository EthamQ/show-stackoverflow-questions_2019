import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemsCardComponent } from './search-items-card.component';

describe('SearchItemsCardComponent', () => {
  let component: SearchItemsCardComponent;
  let fixture: ComponentFixture<SearchItemsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
