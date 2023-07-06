import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPipesComponent } from './ng-pipes.component';

describe('NgPipesComponent', () => {
  let component: NgPipesComponent;
  let fixture: ComponentFixture<NgPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgPipesComponent]
    });
    fixture = TestBed.createComponent(NgPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
