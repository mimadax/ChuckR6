import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeViewComponent } from './joke-view.component';

describe('JokeViewComponent', () => {
  let component: JokeViewComponent;
  let fixture: ComponentFixture<JokeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
