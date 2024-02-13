import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientComponent } from './view-client.component';

describe('ViewClientComponent', () => {
  let component: ViewClientComponent;
  let fixture: ComponentFixture<ViewClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClientComponent]
    });
    fixture = TestBed.createComponent(ViewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
