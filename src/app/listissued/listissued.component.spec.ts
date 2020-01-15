import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListissuedComponent } from './listissued.component';

describe('ListissuedComponent', () => {
  let component: ListissuedComponent;
  let fixture: ComponentFixture<ListissuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListissuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListissuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
