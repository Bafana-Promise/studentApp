import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersDialogComponent } from './teachers-dialog.component';

describe('TeachersDialogComponent', () => {
  let component: TeachersDialogComponent;
  let fixture: ComponentFixture<TeachersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
