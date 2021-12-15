import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketRemoveComponent } from './basket-remove.component';

describe('BasketRemoveComponent', () => {
  let component: BasketRemoveComponent;
  let fixture: ComponentFixture<BasketRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
