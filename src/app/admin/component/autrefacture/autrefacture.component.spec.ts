import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutrefactureComponent } from './autrefacture.component';

describe('AutrefactureComponent', () => {
  let component: AutrefactureComponent;
  let fixture: ComponentFixture<AutrefactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutrefactureComponent]
    });
    fixture = TestBed.createComponent(AutrefactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
