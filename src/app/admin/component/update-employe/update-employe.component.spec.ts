import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeComponent } from './update-employe.component';

describe('UpdateEmployeComponent', () => {
  let component: UpdateEmployeComponent;
  let fixture: ComponentFixture<UpdateEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
