import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpensesComponent } from './view-expenses.component';

describe('ViewExpensesComponent', () => {
  let component: ViewExpensesComponent;
  let fixture: ComponentFixture<ViewExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExpensesComponent]
    });
    fixture = TestBed.createComponent(ViewExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
