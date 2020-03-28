import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingContactComponent } from './setting-contact.component';

describe('SettingContactComponent', () => {
  let component: SettingContactComponent;
  let fixture: ComponentFixture<SettingContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
