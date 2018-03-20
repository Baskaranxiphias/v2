import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAtsiComponent } from './why-atsi.component';

describe('WhyAtsiComponent', () => {
  let component: WhyAtsiComponent;
  let fixture: ComponentFixture<WhyAtsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAtsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAtsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
