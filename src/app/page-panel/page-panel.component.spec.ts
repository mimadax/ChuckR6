import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePanelComponent } from './page-panel.component';

describe('PagePanelComponent', () => {
  let component: PagePanelComponent;
  let fixture: ComponentFixture<PagePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
