import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeNotesPage } from './practice-notes.page';

describe('PracticeNotesPage', () => {
  let component: PracticeNotesPage;
  let fixture: ComponentFixture<PracticeNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
