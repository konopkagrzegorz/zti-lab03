import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01Task01Component } from './exercise01-task01.component';

describe('Exercise01Task01Component', () => {
  let component: Exercise01Task01Component;
  let fixture: ComponentFixture<Exercise01Task01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise01Task01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01Task01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
