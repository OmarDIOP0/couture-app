import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilitegeneraleComponent } from './comptabilitegenerale.component';

describe('ComptabilitegeneraleComponent', () => {
  let component: ComptabilitegeneraleComponent;
  let fixture: ComponentFixture<ComptabilitegeneraleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComptabilitegeneraleComponent]
    });
    fixture = TestBed.createComponent(ComptabilitegeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
