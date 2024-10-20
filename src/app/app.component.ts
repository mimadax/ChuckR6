import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./other/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

/**
 * 
 * VARIABLE GLOABLE 
 * 
 */

APP_ENV: string ="DEV"; //on instencie une variable pour dit si on est en PROD or DEV
API_URL: string = ""; //on laisse vite mais on va implamenter OnInti pour qu'il remplisse cette variable a chaque fois

ngOnInit(): void {
    /** GESTION API */
    if (this.APP_ENV == "DEV") {
      this.API_URL = "https://api.chucknorris.io/jokes/";
    }else if(this.APP_ENV == "PROD") {
      this.API_URL = "https://api.chucknorris.io/jokes/random";
    }else{
      this.API_URL = "https://api.chucknorris.io/jokes/random";
    }
}

}

