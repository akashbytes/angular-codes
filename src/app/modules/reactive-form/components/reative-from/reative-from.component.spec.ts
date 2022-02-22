import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFromComponent } from './reative-from.component';

describe('ReativeFromComponent', () => {
  let component: ReativeFromComponent;
  let fixture: ComponentFixture<ReativeFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
