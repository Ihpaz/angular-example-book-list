import { ComponentFixture, TestBed } from '@angular/core/testing';

import { newBookComponent } from './newBook.component';

describe('newBookComponent', () => {
  let component: newBookComponent;
  let fixture: ComponentFixture<newBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [newBookComponent]
    });
    fixture = TestBed.createComponent(newBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
