import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesboutiquesComponent } from './mesboutiques.component';

describe('MesboutiquesComponent', () => {
  let component: MesboutiquesComponent;
  let fixture: ComponentFixture<MesboutiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesboutiquesComponent]
    });
    fixture = TestBed.createComponent(MesboutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
