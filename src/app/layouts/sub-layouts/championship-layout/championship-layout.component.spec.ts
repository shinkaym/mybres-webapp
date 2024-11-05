import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipLayoutComponent } from './championship-layout.component';

describe('ChampionshipLayoutComponent', () => {
  let component: ChampionshipLayoutComponent;
  let fixture: ComponentFixture<ChampionshipLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionshipLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
