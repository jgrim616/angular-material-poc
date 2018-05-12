import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashComponent } from './customer-dash.component';

describe('CustomerDashComponent', () => {
  let component: CustomerDashComponent;
  let fixture: ComponentFixture<CustomerDashComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CustomerDashComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(CustomerDashComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
