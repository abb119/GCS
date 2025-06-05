import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNotesPage } from './add-notes.page';

describe('AddNotesPage', () => {
  let component: AddNotesPage;
  let fixture: ComponentFixture<AddNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
