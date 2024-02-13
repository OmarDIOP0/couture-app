import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBoutiqueComponent } from './item-boutique.component';

describe('ItemBoutiqueComponent', () => {
  let component: ItemBoutiqueComponent;
  let fixture: ComponentFixture<ItemBoutiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemBoutiqueComponent]
    });
    fixture = TestBed.createComponent(ItemBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
