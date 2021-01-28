import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicourseComponent } from './clicourse.component';

describe('ClicourseComponent', () => {
  let component: ClicourseComponent;
  let fixture: ComponentFixture<ClicourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
