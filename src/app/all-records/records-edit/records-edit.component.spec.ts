import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsEditComponent } from './records-edit.component';

describe('RecordsEditComponent', () => {
  let component: RecordsEditComponent;
  let fixture: ComponentFixture<RecordsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
