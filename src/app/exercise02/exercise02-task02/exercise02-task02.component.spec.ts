import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise02Task02Component } from './exercise02-task02.component';

describe('Exercise02Task02Component', () => {
  let component: Exercise02Task02Component;
  let fixture: ComponentFixture<Exercise02Task02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise02Task02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise02Task02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
