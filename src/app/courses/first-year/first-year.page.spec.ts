import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstYearPage } from './first-year.page';

describe('FirstYearPage', () => {
  let component: FirstYearPage;
  let fixture: ComponentFixture<FirstYearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
