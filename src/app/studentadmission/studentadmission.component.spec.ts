import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadmissionComponent } from './studentadmission.component';

describe('StudentadmissionComponent', () => {
  let component: StudentadmissionComponent;
  let fixture: ComponentFixture<StudentadmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentadmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
