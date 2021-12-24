import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairnesscalculatorComponent } from './fairnesscalculator.component';

describe('FairnesscalculatorComponent', () => {
  let component: FairnesscalculatorComponent;
  let fixture: ComponentFixture<FairnesscalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairnesscalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairnesscalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
