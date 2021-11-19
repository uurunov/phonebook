import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsNavComponent } from './records-nav.component';

describe('RecordsNavComponent', () => {
  let component: RecordsNavComponent;
  let fixture: ComponentFixture<RecordsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
