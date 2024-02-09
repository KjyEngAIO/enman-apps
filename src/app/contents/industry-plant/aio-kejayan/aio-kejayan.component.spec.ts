import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AioKejayanComponent } from './aio-kejayan.component';

describe('AioKejayanComponent', () => {
  let component: AioKejayanComponent;
  let fixture: ComponentFixture<AioKejayanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AioKejayanComponent]
    });
    fixture = TestBed.createComponent(AioKejayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
