import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01Task02Component } from './exercise01-task02.component';

describe('Exercise01Task02Component', () => {
  let component: Exercise01Task02Component;
  let fixture: ComponentFixture<Exercise01Task02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise01Task02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01Task02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
