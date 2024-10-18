import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagePanelComponent } from './page-panel/page-panel.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageHomeComponent } from './page-home/page-home.component';

export const routes: Routes = [
    {path: '', component: PageHomeComponent}, 
    {path: 'panel', component: PagePanelComponent},
    {path: 'contact', component: PageContactComponent},
];
