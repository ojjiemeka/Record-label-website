import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KijahJesseComponent } from './kijah-jesse.component';

describe('KijahJesseComponent', () => {
  let component: KijahJesseComponent;
  let fixture: ComponentFixture<KijahJesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KijahJesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KijahJesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
