import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSoftwareComponent } from './erp-software.component';

describe('ErpSoftwareComponent', () => {
  let component: ErpSoftwareComponent;
  let fixture: ComponentFixture<ErpSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
