import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationComponent } from './facturation.component';

describe('FacturationComponent', () => {
  let component: FacturationComponent;
  let fixture: ComponentFixture<FacturationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturationComponent]
    });
    fixture = TestBed.createComponent(FacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
