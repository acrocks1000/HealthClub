import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacebuttonComponent } from './placebutton.component';

describe('PlacebuttonComponent', () => {
  let component: PlacebuttonComponent;
  let fixture: ComponentFixture<PlacebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
