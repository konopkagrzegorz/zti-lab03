import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise02Task03Component } from './exercise02-task03.component';

describe('Exercise02Task03Component', () => {
  let component: Exercise02Task03Component;
  let fixture: ComponentFixture<Exercise02Task03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise02Task03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise02Task03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
