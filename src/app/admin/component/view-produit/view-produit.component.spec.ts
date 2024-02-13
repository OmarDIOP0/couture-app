import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProduitComponent } from './view-produit.component';

describe('ViewProduitComponent', () => {
  let component: ViewProduitComponent;
  let fixture: ComponentFixture<ViewProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProduitComponent]
    });
    fixture = TestBed.createComponent(ViewProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
