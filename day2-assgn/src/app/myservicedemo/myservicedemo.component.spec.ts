import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyservicedemoComponent } from './myservicedemo.component';

describe('MyservicedemoComponent', () => {
  let component: MyservicedemoComponent;
  let fixture: ComponentFixture<MyservicedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyservicedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyservicedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
