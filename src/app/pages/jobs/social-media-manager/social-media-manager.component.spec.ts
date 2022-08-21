import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaManagerComponent } from './social-media-manager.component';

describe('SocialMediaManagerComponent', () => {
  let component: SocialMediaManagerComponent;
  let fixture: ComponentFixture<SocialMediaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
