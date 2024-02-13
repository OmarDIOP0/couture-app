import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraleComponent } from './generale.component';

describe('GeneraleComponent', () => {
  let component: GeneraleComponent;
  let fixture: ComponentFixture<GeneraleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneraleComponent]
    });
    fixture = TestBed.createComponent(GeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
