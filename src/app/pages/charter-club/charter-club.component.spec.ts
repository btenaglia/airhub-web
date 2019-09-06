import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterClubComponent } from './charter-club.component';

describe('CharterClubComponent', () => {
  let component: CharterClubComponent;
  let fixture: ComponentFixture<CharterClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharterClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharterClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
