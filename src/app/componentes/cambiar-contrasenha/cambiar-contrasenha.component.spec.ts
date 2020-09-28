import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContrasenhaComponent } from './cambiar-contrasenha.component';

describe('CambiarContrasenhaComponent', () => {
  let component: CambiarContrasenhaComponent;
  let fixture: ComponentFixture<CambiarContrasenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarContrasenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarContrasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
