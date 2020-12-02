import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFPageComponent } from './nfpage.component';

describe('NFPageComponent', () => {
  let component: NFPageComponent;
  let fixture: ComponentFixture<NFPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
