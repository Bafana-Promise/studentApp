import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdialogComponent } from './regdialog.component';

describe('RegdialogComponent', () => {
  let component: RegdialogComponent;
  let fixture: ComponentFixture<RegdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
