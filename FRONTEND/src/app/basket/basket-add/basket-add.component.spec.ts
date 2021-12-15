import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketAddComponent } from './basket-add.component';

describe('BasketAddComponent', () => {
  let component: BasketAddComponent;
  let fixture: ComponentFixture<BasketAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
