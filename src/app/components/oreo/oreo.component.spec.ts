import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OreoComponent } from './oreo.component';

describe('OreoComponent', () => {
  let component: OreoComponent;
  let fixture: ComponentFixture<OreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
