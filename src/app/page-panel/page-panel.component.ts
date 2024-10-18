import { Component } from '@angular/core';
import { JokeViewComponent } from "./joke-view/joke-view.component";

@Component({
  selector: 'app-page-panel',
  standalone: true,
  imports: [JokeViewComponent],
  templateUrl: './page-panel.component.html',
  styleUrl: './page-panel.component.css'
})
export class PagePanelComponent {

}
