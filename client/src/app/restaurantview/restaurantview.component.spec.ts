import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantviewComponent } from './restaurantview.component';

describe('RestaurantviewComponent', () => {
  let component: RestaurantviewComponent;
  let fixture: ComponentFixture<RestaurantviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
