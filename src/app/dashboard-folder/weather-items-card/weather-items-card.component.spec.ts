import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemsCardComponent } from './weather-items-card.component';

describe('WeatherItemsCardComponent', () => {
  let component: WeatherItemsCardComponent;
  let fixture: ComponentFixture<WeatherItemsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherItemsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
