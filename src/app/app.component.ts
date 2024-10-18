import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
      this.API_URL = "http://localhost:8080/api";
    }else if(this.APP_ENV == "PROD") {
      this.API_URL = "http://localhost:8080/api";
    }else{
      this.API_URL = "http://localhost:8080/api";
    }
}

}

