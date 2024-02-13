import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTermineComponent } from './commande-termine.component';

describe('CommandeTermineComponent', () => {
  let component: CommandeTermineComponent;
  let fixture: ComponentFixture<CommandeTermineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeTermineComponent]
    });
    fixture = TestBed.createComponent(CommandeTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
