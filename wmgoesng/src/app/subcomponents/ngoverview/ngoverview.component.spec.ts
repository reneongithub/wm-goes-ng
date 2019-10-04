import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoverviewComponent } from './ngoverview.component';

describe('NgoverviewComponent', () => {
  let component: NgoverviewComponent;
  let fixture: ComponentFixture<NgoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
