import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationListComponent } from './medication.component';

describe('MedicationListComponent', () => {
  let component: MedicationListComponent;
  let fixture: ComponentFixture<MedicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
