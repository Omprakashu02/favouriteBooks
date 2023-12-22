import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavroiteBooksComponent } from './favroite-books.component';

describe('FavroiteBooksComponent', () => {
  let component: FavroiteBooksComponent;
  let fixture: ComponentFixture<FavroiteBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavroiteBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavroiteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
