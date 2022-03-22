import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditColumnComponent } from './add-edit-column.component';

describe('AddEditColumnComponent', () => {
  let component: AddEditColumnComponent;
  let fixture: ComponentFixture<AddEditColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
