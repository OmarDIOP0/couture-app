import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopComponent } from './product-shop.component';

describe('ProductShopComponent', () => {
  let component: ProductShopComponent;
  let fixture: ComponentFixture<ProductShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShopComponent]
    });
    fixture = TestBed.createComponent(ProductShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
