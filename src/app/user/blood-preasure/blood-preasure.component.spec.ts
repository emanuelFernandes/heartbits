import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPreasureComponent } from './blood-preasure.component';

describe('BloodPreasureComponent', () => {
  let component: BloodPreasureComponent;
  let fixture: ComponentFixture<BloodPreasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodPreasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
