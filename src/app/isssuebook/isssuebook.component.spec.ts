import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsssuebookComponent } from './isssuebook.component';

describe('IsssuebookComponent', () => {
  let component: IsssuebookComponent;
  let fixture: ComponentFixture<IsssuebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsssuebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsssuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
