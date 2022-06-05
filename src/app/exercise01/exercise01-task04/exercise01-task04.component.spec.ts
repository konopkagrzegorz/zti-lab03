import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01Task04Component } from './exercise01-task04.component';

describe('Exercise01Task04Component', () => {
  let component: Exercise01Task04Component;
  let fixture: ComponentFixture<Exercise01Task04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise01Task04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01Task04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
