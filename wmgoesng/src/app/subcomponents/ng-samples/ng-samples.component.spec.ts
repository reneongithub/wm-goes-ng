import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSamplesComponent } from './ng-samples.component';

describe('NgSamplesComponent', () => {
  let component: NgSamplesComponent;
  let fixture: ComponentFixture<NgSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
