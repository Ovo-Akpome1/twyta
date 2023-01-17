import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponentsComponent } from './left-components.component';

describe('LeftComponentsComponent', () => {
  let component: LeftComponentsComponent;
  let fixture: ComponentFixture<LeftComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
