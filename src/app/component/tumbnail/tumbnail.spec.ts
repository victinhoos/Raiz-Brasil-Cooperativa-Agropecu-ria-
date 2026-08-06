import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tumbnail } from './tumbnail';

describe('Tumbnail', () => {
  let component: Tumbnail;
  let fixture: ComponentFixture<Tumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tumbnail],
    }).compileComponents();

    fixture = TestBed.createComponent(Tumbnail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
