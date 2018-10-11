import { Component, OnInit } from '@angular/core';
import {Artist} from '../model/Artist';
import {City} from '../model/City';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  artists: Artist[];
  constructor() { }

  ngOnInit() {
    this.artists = [
      new Artist(1, 'test1', 'hello', 'lol@mail.fr', null, 'Elton John', 'salut c Elton John', '', '', undefined, ''),
      new Artist(2, 'test2', 'hello', 'lol@mail.fr', null, 'Franck Mickael', 'salut c Frank Mickael', '', '', undefined, ''),
      new Artist(3, 'test3', 'hello', 'lol@mail.fr', null, 'George Michael', 'salut c George Michael', '', '', undefined, ''),
    ];
  }

}
