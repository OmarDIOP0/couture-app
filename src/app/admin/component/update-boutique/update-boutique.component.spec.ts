import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoutiqueComponent } from './update-boutique.component';

describe('UpdateBoutiqueComponent', () => {
  let component: UpdateBoutiqueComponent;
  let fixture: ComponentFixture<UpdateBoutiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBoutiqueComponent]
    });
    fixture = TestBed.createComponent(UpdateBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
