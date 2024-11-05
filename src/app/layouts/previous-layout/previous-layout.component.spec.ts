import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousLayoutComponent } from './previous-layout.component';

describe('PreviousLayoutComponent', () => {
  let component: PreviousLayoutComponent;
  let fixture: ComponentFixture<PreviousLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
