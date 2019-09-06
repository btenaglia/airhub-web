import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCharterComponent } from './private-charter.component';

describe('PrivateCharterComponent', () => {
  let component: PrivateCharterComponent;
  let fixture: ComponentFixture<PrivateCharterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCharterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
