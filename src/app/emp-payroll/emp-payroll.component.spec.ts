import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPayrollComponent } from './emp-payroll.component';

describe('EmpPayrollComponent', () => {
  let component: EmpPayrollComponent;
  let fixture: ComponentFixture<EmpPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
