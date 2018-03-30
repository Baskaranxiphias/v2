import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEnableComponent } from './device-enable.component';

describe('DeviceEnableComponent', () => {
  let component: DeviceEnableComponent;
  let fixture: ComponentFixture<DeviceEnableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceEnableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
