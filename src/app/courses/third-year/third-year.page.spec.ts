import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThirdYearPage } from './third-year.page';

describe('ThirdYearPage', () => {
  let component: ThirdYearPage;
  let fixture: ComponentFixture<ThirdYearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
