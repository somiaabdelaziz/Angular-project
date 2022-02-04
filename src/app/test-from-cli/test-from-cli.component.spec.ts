import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFromCliComponent } from './test-from-cli.component';

describe('TestFromCliComponent', () => {
  let component: TestFromCliComponent;
  let fixture: ComponentFixture<TestFromCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFromCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFromCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
