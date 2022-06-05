import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01Task03Component } from './exercise01-task03.component';

describe('Exercise01Task03Component', () => {
  let component: Exercise01Task03Component;
  let fixture: ComponentFixture<Exercise01Task03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise01Task03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01Task03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
