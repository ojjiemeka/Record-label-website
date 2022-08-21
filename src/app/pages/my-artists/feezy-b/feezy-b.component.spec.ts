import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeezyBComponent } from './feezy-b.component';

describe('FeezyBComponent', () => {
  let component: FeezyBComponent;
  let fixture: ComponentFixture<FeezyBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeezyBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeezyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
