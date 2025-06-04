import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FourthYearPage } from './fourth-year.page';

describe('FourthYearPage', () => {
  let component: FourthYearPage;
  let fixture: ComponentFixture<FourthYearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
