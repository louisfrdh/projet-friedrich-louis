import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormSummaryComponent } from './account-form-summary.component';

describe('AccountFormSummaryComponent', () => {
  let component: AccountFormSummaryComponent;
  let fixture: ComponentFixture<AccountFormSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFormSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
