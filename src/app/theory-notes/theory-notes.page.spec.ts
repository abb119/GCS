import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheoryNotesPage } from './theory-notes.page';

describe('TheoryNotesPage', () => {
  let component: TheoryNotesPage;
  let fixture: ComponentFixture<TheoryNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
