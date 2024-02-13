import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoutiqueComponent } from './view-boutique.component';

describe('ViewBoutiqueComponent', () => {
  let component: ViewBoutiqueComponent;
  let fixture: ComponentFixture<ViewBoutiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBoutiqueComponent]
    });
    fixture = TestBed.createComponent(ViewBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
