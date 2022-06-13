import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotesComponent } from './patient-notes.component';

describe('UserNotesComponent', () => {
  let component: UserNotesComponent;
  let fixture: ComponentFixture<UserNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNotesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});