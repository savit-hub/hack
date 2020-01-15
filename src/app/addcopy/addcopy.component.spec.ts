import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcopyComponent } from './addcopy.component';

describe('AddcopyComponent', () => {
  let component: AddcopyComponent;
  let fixture: ComponentFixture<AddcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
