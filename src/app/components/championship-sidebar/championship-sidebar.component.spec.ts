import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipSidebarComponent } from './championship-sidebar.component';

describe('ChampionshipSidebarComponent', () => {
  let component: ChampionshipSidebarComponent;
  let fixture: ComponentFixture<ChampionshipSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionshipSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
