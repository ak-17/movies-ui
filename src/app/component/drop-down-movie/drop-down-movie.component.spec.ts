import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownMovieComponent } from './drop-down-movie.component';

describe('DropDownMovieComponent', () => {
  let component: DropDownMovieComponent;
  let fixture: ComponentFixture<DropDownMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
