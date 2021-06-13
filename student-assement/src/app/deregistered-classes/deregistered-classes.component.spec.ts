import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeregisteredClassesComponent } from './deregistered-classes.component';

describe('DeregisteredClassesComponent', () => {
  let component: DeregisteredClassesComponent;
  let fixture: ComponentFixture<DeregisteredClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeregisteredClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeregisteredClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
