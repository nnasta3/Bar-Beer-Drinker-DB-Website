import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDetailsComponent } from './modify-details.component';

describe('ModifyDetailsComponent', () => {
  let component: ModifyDetailsComponent;
  let fixture: ComponentFixture<ModifyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
