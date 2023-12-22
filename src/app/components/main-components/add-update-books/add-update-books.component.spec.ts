import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateBooksComponent } from './add-update-books.component';

describe('AddUpdateBooksComponent', () => {
  let component: AddUpdateBooksComponent;
  let fixture: ComponentFixture<AddUpdateBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
