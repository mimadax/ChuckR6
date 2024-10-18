import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../_service/joke.service';
import { AppComponent } from '../../app.component';
import { JokeInterface } from '../../_interface/joke.interface';

@Component({
  selector: 'app-joke-view',
  standalone: true,
  imports: [],
  templateUrl: './joke-view.component.html',
  styleUrl: './joke-view.component.css'
})
export class JokeViewComponent implements OnInit {

  jokeOne:JokeInterface|undefined; //technique mettre jokeOne plus lisible que joke'S' et précisé le type même sil est indéfini, ici elle attend le résultat de l'API


  constructor(
    private jokeService: JokeService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
      //objectif de crée un paramètre car subscrive ne retourne rien, soit de travailer avec l'APi ou de le sortir du subscribe et lui dire quoi faire avec, donc on va la sortir 
      this.jokeService.getJokeRandom(this.appComponent.API_URL).subscribe((jokeResponse:JokeInterface) => {
    this.jokeOne = jokeResponse;
      }); 
  }
}
