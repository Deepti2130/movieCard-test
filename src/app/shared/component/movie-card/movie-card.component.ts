import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../model/movies';
import { movieArray } from '../../const/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
movieData: Array<Imovie>= []
  constructor() { }

  ngOnInit(): void {
    this.movieData = movieArray;
  }

}
