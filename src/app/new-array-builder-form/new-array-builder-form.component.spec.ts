import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrayBuilderFormComponent } from './new-array-builder-form.component';

describe('NewArrayBuilderFormComponent', () => {
  let component: NewArrayBuilderFormComponent;
  let fixture: ComponentFixture<NewArrayBuilderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrayBuilderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrayBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
