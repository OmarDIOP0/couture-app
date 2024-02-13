import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeLivreComponent } from './commande-livre.component';

describe('CommandeLivreComponent', () => {
  let component: CommandeLivreComponent;
  let fixture: ComponentFixture<CommandeLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeLivreComponent]
    });
    fixture = TestBed.createComponent(CommandeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
