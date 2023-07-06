import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoPaiComponent } from './filho-pai.component';

describe('FilhoPaiComponent', () => {
  let component: FilhoPaiComponent;
  let fixture: ComponentFixture<FilhoPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilhoPaiComponent]
    });
    fixture = TestBed.createComponent(FilhoPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
