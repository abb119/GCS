import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondYearPage } from './second-year.page';

describe('SecondYearPage', () => {
  let component: SecondYearPage;
  let fixture: ComponentFixture<SecondYearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
