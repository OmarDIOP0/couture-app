import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoutiqueCategorieComponent } from './update-boutique-categorie.component';

describe('UpdateBoutiqueCategorieComponent', () => {
  let component: UpdateBoutiqueCategorieComponent;
  let fixture: ComponentFixture<UpdateBoutiqueCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBoutiqueCategorieComponent]
    });
    fixture = TestBed.createComponent(UpdateBoutiqueCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
