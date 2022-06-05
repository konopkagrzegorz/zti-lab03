import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise02Task01Component } from './exercise02-task01.component';

describe('Exercise02Task01Component', () => {
  let component: Exercise02Task01Component;
  let fixture: ComponentFixture<Exercise02Task01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise02Task01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise02Task01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
