import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabbaticalPageComponent } from './sabbatical-page.component';

describe('SabbaticalPageComponent', () => {
  let component: SabbaticalPageComponent;
  let fixture: ComponentFixture<SabbaticalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabbaticalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabbaticalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
