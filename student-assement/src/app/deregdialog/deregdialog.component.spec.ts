import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeregdialogComponent } from './deregdialog.component';

describe('DeregdialogComponent', () => {
  let component: DeregdialogComponent;
  let fixture: ComponentFixture<DeregdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeregdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeregdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
